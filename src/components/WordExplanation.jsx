import React, { useState, useEffect } from "react"
import ankiConnectInvoke from "../logic/sendToAnki"
import front from "../assets/front"
import back from "../assets/back"

export default function WordExplanation({
    word,
    previousCues,
    nextCues,
    currCue,
    episode,
    episodeId,
    timestamp,
    duration,
    isYouTube = false,
}) {
    const [loading, setLoading] = useState(true)
    const [explanation, setExplanation] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchExplanation()
    }, [word])

    async function fetchExplanation() {
        setLoading(true)
        setError(null)

        try {
            const res = await postJson("/api/explain", {
                word,
                previousCues,
                nextCues,
                currCue,
            })

            setExplanation(res.explanation)
        } catch (err) {
            console.error(err)
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    async function handleAdd(type) {
        const content = type === "word" ? word : currCue
        if (!content || !content.trim()) {
            alert("No text to translate!")
            return
        }

        let translation = null

        try {
            try {
                const res = await postJson("/api/translate", { text: content })
                translation = res.translated
            } catch (e) {
                console.warn("fallback trans.", e)
                try {

                    const res = await postJson("/api/translatesubs", {
                        "text": [content]
                    })
                    if (!res.translatedText || !res.translatedText[0]) {
                        throw new Error("Fallback response invalid: " + JSON.stringify(res))
                    }
                    translation = res.translatedText[0]
                    console.log(`Translation: ${translation}`)
                } catch (fallbackErr) {
                    console.error("ERR:", fallbackErr)
                
                }
            }

            await createAnkiCard({
                type,
                content,
                translation,
                episodeId,
                timestamp,
                duration,
                episode,
                isYouTube,
            })
        } catch (err) {
            console.error(err)
            alert(`Failed to add to Anki: ${err.message}`)
        }
    }

    return (
        <div className="word-explanation">
            {loading && <div>Loading explanation...</div>}

            {!loading && error && (
                <div style={{ color: "red" }}>Error: {error}</div>
            )}

            {!loading && !error && (
                <>
                    <h3>{word}</h3>
                    <div>{explanation}</div>
                </>
            )}

            <div className="buttonsAddAnki">
                <button onClick={() => handleAdd("word")}>Add Word</button>
                <button onClick={() => handleAdd("sentence")}>Add sentence</button>
            </div>
        </div>
    )
}



async function postJson(url, body) {
    const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    })

    if (!res.ok) {
        const text = await res.text()
        throw new Error(text || `Request failed (${res.status})`)
    }

    return res.json()
}

async function createAnkiCard({
    type,
    content,
    translation,
    episodeId,
    timestamp,
    duration,
    episode,
    isYouTube = false,
}) {
    const suffix = Date.now()

    const imgFile = `oubl_img_${episodeId}_${timestamp}_${suffix}.jpg`
    const audioFile = `oubl_audio_${episodeId}_${timestamp}_${suffix}.mp3`


    const vpsPrefix = isYouTube ? "/vps-3002" : "/vps-3001"
    const imgUrl = `${window.location.origin}${vpsPrefix}/screenshot?id=${episodeId}&timestamp=${timestamp}`
    const audioUrl = `${window.location.origin}${vpsPrefix}/audio?id=${episodeId}&timestamp=${timestamp}&duration=${duration}`

    const storedImg = await storeMedia(imgFile, imgUrl)
    const storedAudio = await storeMedia(audioFile, audioUrl)

    const deckName = isYouTube ? `YouTube::${episodeId}` : `FIA::${episodeId} EP`

    await ankiConnectInvoke("createDeck", 5, {
        deck: deckName,
    }).catch(console.error)

    await ankiConnectInvoke("addNote", 5, {
        note: {
            deckName: deckName,
            modelName: "Basic",
            fields: {
                Front: front({
                    imgSrc: storedImg,
                    Sentence: content,
                    audio: `[sound:${storedAudio}]`,
                }),
                Back: back({
                    imgSrc: storedImg,
                    ogSentence: content,
                    translatedSentence: translation,
                    audio: `[sound:${storedAudio}]`,
                }),
            },
            tags: [type, episode],
        },
    })
}

async function storeMedia(filename, url) {
    const result = await ankiConnectInvoke("storeMediaFile", 6, {
        filename,
        url,
    })

    return result || filename
}
