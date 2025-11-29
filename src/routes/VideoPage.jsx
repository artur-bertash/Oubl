import episodes from "../data/frenchInActionEpisodes";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "../styles/VideoPage.css";
import GoBack from "../components/GoBack";
import Subtitles from "../components/Subtitles";
import WordExplanation from "../components/WordExplanation";
import convertSrt from "../logic/srtToObj";

function VideoPage() {
  const { videoId } = useParams();
  const episode = episodes[videoId];
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const [currentTime, setCurrentTime] = useState(0);
  const [ended, setEnded] = useState(false);
  const [currCueIndex, setCurrCueIndex] = useState(-1);
  const [subs, setSubs] = useState([
    { start: 0.0, end: 10, text: "Bonjour !" },
    { start: 10, end: 20, text: "Comment ça va ?" },
    { start: 20, end: 30, text: "Très bien, merci." },
  ]);
  const [subsEnglish, setSubsEnglish] = useState([
    { start: 0.0, end: 10, text: "Bonjour !" },
    { start: 10, end: 20, text: "Comment ça va ?" },
    { start: 20, end: 30, text: "Très bien, merci." },
  ]);
  const [clickedWord, setClickedWord] = useState({index: -1, 
                                                  word: ""
  })

  
  function handleTimeUpdate() {
    const video = videoRef.current;
    if (!video) return;

    const t = video.currentTime;
    setCurrentTime(t);
    const activeCueIndex = subs.findIndex((s) => s.start <= t && s.end > t);
    setCurrCueIndex(activeCueIndex || -1);
  }

  function handleEnded() {
    setEnded(true);
  }

  function goToNextEpisode() {
    const nextId = Number(videoId) + 1;
    if (!episodes[nextId]) {
      alert("There are no more episodes. Congrats!");
      return;
    }
    navigate(`/videos/${nextId}`);
    setEnded(false);
  }

  
  useEffect(() => {
    const handleKey = (e) => {
      if (!currCueIndex || !videoRef.current) return;
      const video = videoRef.current;
      video.play()
      if (e.key === "ArrowRight") {
        
        
        if (currCueIndex < subs.length - 1) {
          video.currentTime = subs[currCueIndex + 1].start + 0.01;
        }
      }

      if (e.key === "ArrowLeft") {
        
        const i = subs.findIndex((s) => s === currCueIndex);
        if (i > 0) {
          video.currentTime = subs[currCueIndex - 1].start + 0.01;
        }
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currCueIndex, subs]);

  useEffect(() => {
  async function loadSubs() {
    try {
      
      const res = await fetch(`/subs_french/${videoId}.srt`);
      const text = await res.text();
      setSubs(convertSrt(text));  
      const resEnglish = await fetch(`/subs_english/${videoId}.srt`);
      const textEnglish = await resEnglish.text();
      setSubsEnglish(convertSrt(textEnglish));  
      
    } catch (e) {
      console.error("Failed to load subtitles:", e);
    }
  }

  loadSubs();
}, [videoId]);

  return (
    <div className="video-page">
      <GoBack />
      <div className="video-sub">

      
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

      <div className="subtitle-wrapper">
        <Subtitles currTime={currentTime} subs={subs} clickedWord={clickedWord} setClickedWord={setClickedWord}/>
        <Subtitles currTime={currentTime} subs={subsEnglish} clickedWord={clickedWord} setClickedWord={setClickedWord} />
      </div>
      <div>
        
      </div>
      </div>
      {clickedWord.index !== -1 && (
        <WordExplanation word={clickedWord.word} previousCues={currCueIndex > 0 ? subs[currCueIndex - 1].text : ""} nextCues={currCueIndex < subs.length - 1 ? subs[currCueIndex + 1].text : ""} currCue={(currCueIndex > 0 && currCueIndex < subs.length) ? subs[currCueIndex].text : "" }/>
      )}

      {ended && (
        <button className="next-btn" onClick={goToNextEpisode}>
          Next Episode
        </button>
      )}

    </div>
  );
}

export default VideoPage;
