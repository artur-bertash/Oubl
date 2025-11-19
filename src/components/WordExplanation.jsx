import React, {useState, useEffect} from 'react';

function WordExplanation({word, previousCues, nextCues, currCue}) {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(true);

    

    useEffect(() => {
        async function getExplanation() {
            try {
                setLoading(true);
                const res = await fetch("/api/explain", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ word, previousCues, nextCues, currCue }),
                });

                
                if (!res.ok) {
                    const errorText = await res.text();
                    console.error("API Error:", res.status, errorText);
                    setResponse({ error: `API Error: ${res.status} - ${errorText}` });
                    setLoading(false);
                    return;
                }

                
                const contentType = res.headers.get("content-type");
                if (!contentType || !contentType.includes("application/json")) {
                    const text = await res.text();
                    console.error("Invalid JSON response:", text);
                    setResponse({ error: "Invalid JSON response from server" });
                    setLoading(false);
                    return;
                }

                const data = await res.json();
                console.log(data);
                setResponse(data);
                setLoading(false);
            } catch (err) {
                console.error("Fetch error:", err);
                setResponse({ error: err.message });
                setLoading(false);
            }
        }

        getExplanation();
    }, [word]);
    

    return (
        <div className="word-explanation">
            {loading ? (
                <div>Loading explanation...</div>
            ) : (
                <>
                    <h3>Explanation for: {word}</h3>
                    {response?.error ? (
                        <div style={{ color: 'red' }}>
                            Error: {typeof response.error === 'string' ? response.error : response.error.message || 'Unknown error'}
                        </div>
                    ) : response?.explanation ? (
                        <div>{response.explanation}</div>
                    ) : null}
                </>
            )}
        </div>
    )
}

export default WordExplanation