import episodes  from "../data/frenchInActionEpisodes"
import "../styles/Videos.css"
import Video from "../components/Video"
import GoBack from "../components/GoBack"

function Videos() {
    return (
        <div className="videos">
        <GoBack/>
        {episodes.map((episode) => (
            <Video key={episode.id} episode={episode} />
        ))}
        </div>
    )
}
export default Videos