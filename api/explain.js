export default async function handler(req, res) {
  try {
    // Handle req.body - it might already be parsed or might be a string
    
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    console.log(body)
    const { word, previousCues, nextCues, currCue } = body;

    const key = process.env.OPENROUTER_KEY;

    // IMPORTANT: don't shadow res, rename the fetch response
    const openrouterRes = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'qwen/qwen3-30b-a3b:free',
        messages: [
          {
            role: 'user',
            content: `
              Explain the target French word in context.
              Give 1–3 short, natural sentences in English.
              Word: ${word}
              Previous: ${previousCues}
              Current: ${currCue}
              Next: ${nextCues}
            `,
          },
        ],
      }),
    });

    const data = await openrouterRes.json();

    // Check if OpenRouter returned an error
    if (data.error) {
      return res.status(500).json({ 
        error: data.error.message || 'OpenRouter API error',
        code: data.error.code,
      });
    }

    // Extract the explanation text from the response
    const explanation = data.choices?.[0]?.message?.content || 'No explanation available';
    
    return res.status(200).json({ explanation });

  } catch (err) {
    console.error("SERVER ERROR:", err);
    return res.status(500).json({ error: err.message });
  }
}
