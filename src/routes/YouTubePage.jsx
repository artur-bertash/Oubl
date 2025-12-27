import { useParams } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import "../styles/VideoPage.css"
import GoBack from "../components/GoBack"
import Subtitles from "../components/Subtitles"
import WordExplanation from "../components/WordExplanation"
import convertVtt from "../logic/vttToObj"
import StatusConenction from "../components/StatusConnection"
import sendToAnki from "../logic/sendToAnki"

const API_BASE_URL = "http://74.208.167.229:3002"

function YouTubePage() {
    const { videoId } = useParams()
    const videoRef = useRef(null)

    const [currentTime, setCurrentTime] = useState(0)
    const [ended, setEnded] = useState(false)
    const [currCueIndex, setCurrCueIndex] = useState(-1)
    const [subs, setSubs] = useState([{ start: 0, end: 10, text: "Loading subtitles..." }])
    const [subsEnglish, setSubsEnglish] = useState([{ start: 0, end: 10, text: "Loading subtitles..." }])
    const [clickedWord, setClickedWord] = useState({ index: -1, word: "" })
    const [isAnkiConencted, setAnkiConnection] = useState(true)
    const [isPlaying, setIsPlaying] = useState(true)
    const [videoTitle] = useState("YouTube Video")

    function handleTimeUpdate() {
        const video = videoRef.current
        if (!video) return

        const time = video.currentTime
        setCurrentTime(time)

        const index = subs.findIndex(s => s.start <= time && s.end > time)
        setCurrCueIndex(index)
    }

    function handleEnded() {
        setEnded(true)
    }

    useEffect(() => {
        function handleKey(e) {
            const video = videoRef.current
            if (!video) return

            if (e.code === "Space") {
                e.preventDefault()
                if (isPlaying) {
                    video.pause()
                    setIsPlaying(false)
                } else {
                    video.play()
                    setIsPlaying(true)
                }
            }

            if (e.key === "ArrowRight") {
                const next = subs.find(s => s.start > video.currentTime + 0.2)
                if (next) {
                    video.currentTime = next.start + 0.01
                    video.play()
                }
            }

            if (e.key === "ArrowLeft") {
                for (let i = subs.length - 1; i >= 0; i--) {
                    if (subs[i].start < video.currentTime - 0.5) {
                        video.currentTime = subs[i].start + 0.01
                        video.play()
                        break
                    }
                }
            }
        }

        window.addEventListener("keydown", handleKey)
        return () => window.removeEventListener("keydown", handleKey)
    }, [subs, isPlaying])

    useEffect(() => {
        async function translateSubs(parsedSubs) {
            const size = 50
            let translated = []

            for (let i = 0; i < parsedSubs.length; i += size) {
                const slice = parsedSubs.slice(i, i + size)
                const text = slice.map(s => s.text)

                const res = await fetch("/api/translate", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ text }),
                })

                if (!res.ok) break

                const { translated: out } = await res.json()
                if (!Array.isArray(out)) break

                translated = translated.concat(out)

                setSubsEnglish(
                    parsedSubs.map((s, idx) =>
                        idx < translated.length
                            ? { ...s, text: translated[idx] }
                            : s
                    )
                )
            }
        }

        async function loadSubs() {
            if (!videoId) return

            try {
                const res = await fetch(`${API_BASE_URL}/subtitles?id=${videoId}`)
                const text = await res.text()
                const parsed = convertVtt(text)

                if (parsed.length) {
                    setSubs(parsed)
                    setSubsEnglish(parsed)
                    translateSubs(parsed)
                }
            } catch {
                setSubs([{ start: 0, end: 10, text: "Subtitles unavailable" }])
                setSubsEnglish([{ start: 0, end: 10, text: "Subtitles unavailable" }])
            }
        }

        loadSubs()
    }, [videoId])

    useEffect(() => {
        async function checkAnki() {
            try {
                const res = await sendToAnki("version", 5)
                setAnkiConnection(!res?.error)
            } catch {
                setAnkiConnection(false)
            }
        }

        checkAnki()
        const interval = setInterval(checkAnki, 5000)
        return () => clearInterval(interval)
    }, [])

    const videoUrl = `${API_BASE_URL}/download?id=${videoId}`

    return (
        <div className="video-page">
            <GoBack />

            <div className="video-sub">
                <video
                    ref={videoRef}
                    autoPlay
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={handleEnded}
                    className="video-player"
                    controls={false}
                    disablePictureInPicture
                >
                    <source src={videoUrl} type="video/mp4" />
                </video>

                <div className="subtitle-wrapper">
                    <Subtitles
                        currTime={currentTime}
                        subs={subs}
                        clickedWord={clickedWord}
                        setClickedWord={setClickedWord}
                    />
                    <Subtitles
                        currTime={currentTime}
                        subs={subsEnglish}
                        clickedWord={clickedWord}
                        setClickedWord={setClickedWord}
                    />
                </div>
            </div>

            {clickedWord.index !== -1 && (
                <WordExplanation
                    word={clickedWord.word}
                    previousCues={currCueIndex > 0 ? subs[currCueIndex - 1].text : ""}
                    nextCues={currCueIndex < subs.length - 1 ? subs[currCueIndex + 1].text : ""}
                    currCue={subs[currCueIndex]?.text || ""}
                    episodeId={videoId}
                    episode={videoTitle}
                    timestamp={subs[currCueIndex]?.start || currentTime}
                    duration={
                        subs[currCueIndex]
                            ? subs[currCueIndex].end - subs[currCueIndex].start
                            : 10
                    }
                    isYouTube
                />
            )}

            <StatusConenction isAnkiConencted={isAnkiConencted} />
        </div>
    )
}

export default YouTubePage
