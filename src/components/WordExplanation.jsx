import React, {useState, useEffect} from 'react'

function WordExplanation({word, previousCues, nextCues, currCue}) {
    const [response, setResponse] = useState(null)
    const [loading, setLoaoding] = useState(true)

    const key = import.meta.env.VITE_OPEN_ROUTER_API_KEY

    useEffect(() => {
        async function fetchExplanation() {
            setLoaoding(true)
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
                })
                const data = await res.json()
                console.log(data)
                console.log(`
                    Word: ${word}
                    Previous: ${previousCues}
                    Current: ${currCue}
                    Next: ${nextCues}
                    `)
                setResponse(data.choices[0].message.content)
                setLoaoding(false)
        }
        fetchExplanation()
        

    }, [word])
    

    return (
        <div className="word-explanation">
            {loading ? 
            <div>Loading explanation...</div> : <>
            <h3>Explanation for: {word}</h3>
            <div>{response}</div>
            </>}
            
        </div>
    )
}

export default WordExplanation