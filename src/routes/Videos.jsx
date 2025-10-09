import episodes  from "../data/frenchInActionEpisodes"
import "../styles/Videos.css"
import Video from "../components/Video"

function Videos() {
    return (
        <div className="videos">
        {episodes.map((episode) => (
            <Video key={episode.id} episode={episode} />
        ))}
        </div>
    )
}
export default Videos