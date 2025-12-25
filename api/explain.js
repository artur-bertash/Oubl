import { OpenRouter } from '@openrouter/sdk';

export default async function handler(req, res) {
    setCorsHeaders(res);

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    try {
        const body = parseBody(req.body);
        validateRequest(body);

        const explanation = await fetchExplanation(body);
        return res.status(200).json({ explanation });
    } catch (error) {
        console.error('Explanation Error:', error);
        return res.status(500).json({ error: error.message || 'Failed to get explanation' });
    }
}

function setCorsHeaders(res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

function parseBody(body) {
    return typeof body === 'string' ? JSON.parse(body) : body;
}

function validateRequest({ word }) {
    if (!word) throw new Error('Word is required');
    if (!process.env.OPENROUTER_KEY) throw new Error('OpenRouter API key is not configured');
}

async function fetchExplanation(context) {
    const client = new OpenRouter({ apiKey: process.env.OPENROUTER_KEY });

    const response = await client.chat.send({
        model: 'openai/gpt-4o-mini',
        messages: [{ role: 'user', content: generatePrompt(context) }],
        stream: false,
    });

    return response.choices[0]?.message?.content || 'No explanation available';
}

function generatePrompt({ word, previousCues, nextCues, currCue }) {
    return `
    You are the best french explainer. You explain french words with simple and clear English in context. The explanation should be clear and concise (48 words max). No yapping. Do not use {** or //} to make the text bold. 
    The word to explain: ${word}
    Previous sentence: ${previousCues}
    Current sentence: ${currCue}
    Next Sentence: ${nextCues}
    
    `;
}
