import episodes from "../data/frenchInActionEpisodes"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import "../styles/VideoPage.css"
import GoBack from "../components/GoBack"

function VideoPage() {
  const { videoId } = useParams()
  const episode = episodes[videoId]
  const navigate = useNavigate()
  const videoRef = useRef(null)

  const [currentTime, setCurrentTime] = useState(0)
  const [ended, setEnded] = useState(false)
  const [currCue, setCurrCue] = useState(null)
  const [subs] = useState([
    { start: 0.0, end: 10, text: "Bonjour !" },
    { start: 10, end: 20, text: "Comment ça va ?" },
    { start: 20, end: 30, text: "Très bien, merci." },
  ])

  
  function handleTimeUpdate() {
    const video = videoRef.current
    if (!video) return

    const t = video.currentTime
    setCurrentTime(t)
    const activeCue = subs.find((s) => s.start <= t && s.end > t)
    setCurrCue(activeCue || null)
  }

  function handleEnded() {
    setEnded(true)
  }

  function goToNextEpisode() {
    const nextId = Number(videoId) + 1
    if (!episodes[nextId]) {
      alert("There are no more episodes. Congrats!")
      return
    }
    navigate(`/videos/${nextId}`)
    setEnded(false)
  }

  
  useEffect(() => {
    const handleKey = (e) => {
      if (!currCue || !videoRef.current) return
      const video = videoRef.current
      video.play()
      if (e.key === "ArrowRight") {
        
        const i = subs.findIndex((s) => s === currCue)
        if (i < subs.length - 1) {
          video.currentTime = subs[i + 1].start + 0.01
        }
      }

      if (e.key === "ArrowLeft") {
        
        const i = subs.findIndex((s) => s === currCue)
        if (i > 0) {
          video.currentTime = subs[i - 1].start + 0.01
        }
      }
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [currCue, subs])

  return (
    <div className="video-page">
      <GoBack />
      <video
        key={episode.id}
        ref={videoRef}
        autoPlay
        controls
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        className="video-player"
        controlsList="nofullscreen nodownload noremoteplayback noplaybackrate"
        disablePictureInPicture
      >
        <source src={episode.videoUrl} type="video/mp4" />
      </video>

      <div className="subtitle-line">
        {currCue ? currCue.text : "Press → to start"}
      </div>

      {ended && (
        <button className="next-btn" onClick={goToNextEpisode}>
          Next Episode
        </button>
      )}
    </div>
  )
}

export default VideoPage
