import episodes from "../data/frenchInActionEpisodes"
import { useParams, useNavigate} from "react-router-dom" 
import {useEffect, useRef, useState } from "react"
import  Subtitles from "../components/Subtitles"
import "../styles/VideoPage.css"
import GoBack from "../components/GoBack"

function VideoPage() {
    const episode_obj= useParams()
    console.log(episode_obj.videoId)
    const episode = episodes[episode_obj.videoId]
    const [currentTime, setCurrentTime] = useState(0) 
    const [ended, setEnded] = useState(false)
    const navigate = useNavigate()

    const subs = [
    { start: 0.0, end: 10, text: "Bonjour !" },
    { start: 10, end: 20, text: "Comment ça va ?" },
    { start: 20, end: 30, text: "Très bien, merci." },
  ]


    function handleTimeUpdate() {
      if (!videoRef.current) {
        return
      }
      console.log(videoRef.current.currentTime)

      setCurrentTime(videoRef.current.currentTime)
    }

    function handleEnded() {
      if (!videoRef.current) {
        return
      }

      console.log("video ended")
      setEnded(true)

    }
    function goToNextEpisode() {
      const next_episode_id = episode.id + 1
      if (!episodes[next_episode_id]) {
        alert("There is not more episodes. Congrats!")
      }
      navigate(`/videos/${next_episode_id}`)
      setEnded(false)
    }
    const videoRef = useRef(null)
    useEffect(() => {
      const video = videoRef.current
      video.addEventListener("playing", () => {
        console.log("playing a video")
        console.log(video.currentTime)
      })
    }, [episode])
    
  
    console.log(episode)
    return (
       <div className="video-page">
        <GoBack/>
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

      <Subtitles currTime={currentTime} subs={subs} />

      {ended && (
        <button className="next-btn" onClick={goToNextEpisode}>
          Next Episode →
        </button>
      )}
    </div>

    )
}



export default VideoPage