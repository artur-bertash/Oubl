import "../styles/Video.css"
import { useNavigate } from "react-router-dom"
function Video({ episode }) {
    const navigate = useNavigate()
    return (
        <div className="video" key={episode.id} onClick={() => navigate(`/videos/${episode.id}`)}>
            <img src={episode.img}></img>
            <h4>{episode.title}</h4>

        </div>
    )
}

export default Video