export default async function handler(req, res) {
  try {
    const { word, previousCues, nextCues, currCue} = JSON.parse(req.body);

    const key = process.env.OPENROUTER_KEY; // SAFE: only on server

    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${key}`,
                    'HTTP-Referer': '<YOUR_SITE_URL>', // Optional. Site URL for rankings on openrouter.ai.
                    'X-Title': '<YOUR_SITE_NAME>', // Optional. Site title for rankings on openrouter.ai.
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: 'qwen/qwen3-30b-a3b:free',
                    messages: [
                    {
                        role: 'user',
                        content: `
                Explain the target French word in context.
                Give 1–3 short, natural sentences in English, not labels or bullet points. Do not overword, but be clear. 
                Do NOT use headings like “Form:” or “Meaning:”.
                Explain:
                what it means in this specific sentence
                Keep it simple, natural and short.

                Format:
                <short explanation written in normal sentences>

                Input:
                Word: ${word}
                Previous: ${previousCues}
                Current: ${currCue}
                Next: ${nextCues}
                        `,
                    },
                    ],
                }),
                });
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
