import React, {useState, useEffect} from 'react'

function WordExplanation({word, previousCues, nextCues, currCue}) {
    const [response, setResponse] = useState(null)
    const [loading, setLoaoding] = useState(true)

    

    useEffect(() => {
        async function getExplanation(word, prev, next) {
            const res = await fetch("/api/explain", {
                method: "POST",
                body: JSON.stringify({ word, previousCues, nextCues, currCue }),
            })

            return await res.json()
            }

        setResponse(getExplanation())
        setLoaoding(false)

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