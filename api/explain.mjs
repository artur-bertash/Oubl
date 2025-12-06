import { OpenRouter } from '@openrouter/sdk';

let openrouter = null;

function getOpenRouterClient() {
    if (!openrouter && process.env.OPENROUTER_KEY) {
        openrouter = new OpenRouter({
            apiKey: process.env.OPENROUTER_KEY,
        });
    }
    return openrouter;
}

export default async function handler(req, res) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');


    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }


    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {

        let body = req.body;
        if (typeof body === 'string') {
            try {
                body = JSON.parse(body);
            } catch (error) {
                return res.status(400).json({ error: 'Invalid JSON in request body' });
            }
        }

        const { word, previousCues, nextCues, currCue } = body;

        if (!word) {
            return res.status(400).json({ error: 'Word is required' });
        }

        if (!process.env.OPENROUTER_KEY) {
            return res.status(500).json({ error: 'OpenRouter API key is not configured' });
        }

        const client = getOpenRouterClient();
        if (!client) {
            return res.status(500).json({ error: 'Failed to initialize OpenRouter client' });
        }

        const prompt = `
    You are the best french explainer. You explain french words with simple and clear English in context. The explanation should be clear and concise (48 words max). No yapping. Do not use {** or //} to make the text bold. 
    The word to explain: ${word}
    Previous sentence: ${previousCues}
    Current sentence: ${currCue}
    Next Sentence: ${nextCues}
    
    `;
        console.log(prompt);


        const response = await client.chat.send({
            model: 'openai/gpt-4o-mini',
            messages: [
                {
                    role: 'user',
                    content: prompt,
                },
            ],
            stream: false,
        });

        const explanation = response.choices[0]?.message?.content || 'No explanation available';

        return res.status(200).json({ explanation });
    } catch (error) {
        console.error('Error in /api/explain:', error);
        return res.status(500).json({
            error: error.message || 'Failed to get explanation',
            details: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
}
