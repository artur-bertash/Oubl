import "../styles/Video.css"

function Video({episode}) {
    return (
        <div className="video" key={episode.id}>
            <img  src={episode.img}></img>
            <h4>{episode.title}</h4>

        </div>
    )
}

export default Video