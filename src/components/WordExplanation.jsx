import React, { useState, useEffect, useRef } from 'react';
import ankiConnectInvoke from "../logic/sendToAnki"
import front from "../assets/front"
import back from "../assets/back"


function WordExplanation({ word, previousCues, nextCues, currCue, episode, episodeId, timestamp, duration }) {
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
            console.log(`Backend couldnt return: ${error}`);
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

    async function AddWordSentenceHandler(type) {
        try {
            const content = type === "word" ? word : currCue;
            const translation = await getTranslation(content);

            const vpsScreenshotUrl = `http://74.208.167.229:3001/screenshot?id=${episodeId}&timestamp=${timestamp}`;
            const vpsAudioUrl = `http://74.208.167.229:3001/audio?id=${episodeId}&timestamp=${timestamp}&duration=${duration}`;

            const uniqueSuffix = `${Date.now()}`;
            const imgFilename = `oubl_img_${episodeId}_${timestamp}_${uniqueSuffix}.jpg`;
            const audioFilename = `oubl_audio_${episodeId}_${timestamp}_${uniqueSuffix}.mp3`;

            console.log(`DEBUG: Sending media URLs to Anki...`);
            const [storedImgFilename, storedAudioFilename] = await Promise.all([
                ankiConnectInvoke("storeMediaFile", 6, {
                    "filename": imgFilename,
                    "url": vpsScreenshotUrl
                }).then(res => res || imgFilename),
                ankiConnectInvoke("storeMediaFile", 6, {
                    "filename": audioFilename,
                    "url": vpsAudioUrl
                }).then(res => res || audioFilename)
            ]);

            console.log("DEBUG: Stored media:", storedImgFilename, storedAudioFilename);

            try {
                await ankiConnectInvoke("createDeck", 5, {
                deck: `FIA::${episodeId} EP`
                })
            } catch (err) {
                console.log(err)
            }
            
            const addNoteResult = await ankiConnectInvoke("addNote", 5, {
                "note": {
                    "deckName": `FIA::${episodeId} EP`,
                    "modelName": "Basic",
                    "fields": {
                        "Front": front({
                            imgSrc: storedImgFilename,
                            Sentence: content,
                            audio: `[sound:${storedAudioFilename}]`
                        }),
                        "Back": back({
                            imgSrc: storedImgFilename,
                            ogSentence: content,
                            translatedSentence: translation,
                            audio: `[sound:${storedAudioFilename}]`
                        })
                    },
                    "tags": [
                        `${type}`, `${episode}`
                    ],
                }
            });

            console.log("DEBUG: addNote result:", addNoteResult);
            
        } catch (error) {
            console.error("ERROR in AddWordSentenceHandler:", error);
            alert(`Failed to add card to Anki: ${error}`);
        }
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
                    <button onClick={() => { AddWordSentenceHandler("word") }}>Add Word</button>
                    <button onClick={() => { AddWordSentenceHandler("sentence") }}>Add sentence</button>
                </div>


            </div>

        </>
    )
}

export default WordExplanation