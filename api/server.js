import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { OpenRouter } from '@openrouter/sdk';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors());
app.use(express.json());


const openrouter = new OpenRouter({
  apiKey: process.env.OPENROUTER_KEY,
});


app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});


app.post('/api/explain', async (req, res) => {
  try {
    const { word, previousCues, nextCues, currCue } = req.body;


    if (!word) {
      return res.status(400).json({ error: 'Word is required' });
    }

    if (!process.env.OPENROUTER_KEY) {
      return res.status(500).json({ error: 'OpenRouter API key is not configured' });
    }

    

    const prompt = `
    You are the best french explainer. You explain french words with simple and clear English in context. The explanation should be clear and concise (48 words max). No yapping. Do not use {** or //} to make the text bold. 
    The word to explain: ${word}
    Previous sentence: ${previousCues}
    Current sentence: ${currCue}
    Next Sentence: ${nextCues}
    
    `;
    console.log(prompt)
    // Call OpenRouter API
    const response = await openrouter.chat.send({
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

    res.json({ explanation });
  } catch (error) {
    console.error('Error in /api/explain:', error);
    res.status(500).json({ 
      error: error.message || 'Failed to get explanation',
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`API endpoint: http://localhost:${PORT}/api/explain`);
});

