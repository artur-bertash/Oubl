import React, {useState, useEffect, useRef} from 'react';
import ankiConnectInvoke from "../logic/sendToAnki"
function WordExplanation({word, previousCues, nextCues, currCue, episode }) {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(true);
    
    async function getTranslation(text) {
        console.log("Trasnalting", text)
        const res = await fetch("/api/translate", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ text }),
        });

        if (!res.ok) {
            const error = await res.text();
            console.log(`Backend couldn't return: ${error}`);
            return null;
        }

        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            const raw = await res.text();
            console.log("Backend returned raw text:", raw);
            return raw; 
        }

        const translation = await res.json();
        console.log("Translation JSON:", translation);
        
        return translation.translated;
    }


    async function addWordHandle() {
        const translation = await getTranslation(word)
        await ankiConnectInvoke("addNote", 5, {"note": {
            "deckName": "FIA",
            "modelName": "Basic", 
            "fields": {
                "Front": `${word}`,
                "Back": `${translation}`
            },
            "tags": [
                "word", `${episode}`
            ],
            "audio": { 
                "url": "https://assets.languagepod101.com/dictionary/japanese/audiomp3.php?kanji=猫&kana=ねこ",
                "filename": "yomichan_ねこ_猫.mp3",
                "skipHash": "7e2c2f954ef6051373ba916f000168dc",
                "fields": ["Front"] 
            }
            }})
        
        console.log(translation)
    }

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
        <>
        
        <div className="word-explanation">
            {loading ? (
                <div>Loading explanation...</div>
            ) : (
                <>
                    <h3>{word}</h3>
                    {response?.error ? (
                        <div style={{ color: 'red' }}>
                            Error: {typeof response.error === 'string' ? response.error : response.error.message || 'Unknown error'}
                        </div>
                    ) : response?.explanation ? (
                        <div>{response.explanation}</div>
                    ) : null}
                </>
            )}
            <div className='buttonsAddAnki'>
                <button onClick={addWordHandle}>Add Word</button>
                <button>Add sentence</button>
            </div>
            
            
        </div>
        
        </>
    )
}

export default WordExplanation