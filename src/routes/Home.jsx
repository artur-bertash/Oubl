import { useNavigate } from "react-router"
import { useState } from "react"

function Home() {
    const navigate = useNavigate()

    const [showYoutubeInput, setShowYoutubeInput] = useState(false)
    const [youtubeUrl, setYoutubeUrl] = useState("")

    function handleYouTubeClick() {
        setShowYoutubeInput(true)
    }

    function handleYoutubeSubmit(e) {
        e.preventDefault()
        const url = youtubeUrl
        if (!url) {
            setShowYoutubeInput(false)
            return
        }

        // Extract video ID from various YouTube URL formats
        let videoId = null

        // Format: youtube.com/watch?v=VIDEO_ID
        const watchMatch = url.match(/[?&]v=([^&]+)/)
        if (watchMatch) {
            videoId = watchMatch[1]
        }

        // Format: youtu.be/VIDEO_ID
        const shortMatch = url.match(/youtu\.be\/([^?]+)/)
        if (shortMatch) {
            videoId = shortMatch[1]
        }

        // Direct video ID
        if (!videoId && url.length === 11 && !url.includes('/')) {
            videoId = url
        }

        if (videoId) {
            navigate(`/youtube/${videoId}`)
        } else {
            alert("Invalid YouTube URL. Please try again.")
        }
    }

    return (
        <>

            <div className="wrapper-home">
                <h1>Oubl — Classic French, modern memory.</h1>
                {!showYoutubeInput ? (
                    <div className="buttons">
                        <button onClick={() => navigate("/videos")}>Begin</button>
                        <button onClick={handleYouTubeClick}>Youtube</button>
                        <button onClick={() => navigate("/learn-more")}>Why not Dualingo</button>
                    </div>
                ) : (
                    <form className="youtube-input-container" onSubmit={handleYoutubeSubmit}>
                        <input
                            type="text"
                            placeholder="Paste YouTube video link..."
                            value={youtubeUrl}
                            onChange={(e) => setYoutubeUrl(e.target.value)}
                            autoFocus
                        />
                        <div className="input-actions">
                            <button type="submit">Go</button>
                            <button type="button" onClick={() => setShowYoutubeInput(false)}>Cancel</button>
                        </div>
                    </form>
                )}
            </div>
            <div className="bottom">
                This website makes use of video and audio materials from French in Action (© Yale University and WGBH Educational Foundation). All rights remain with the original copyright holders.
                The episodes are streamed directly from the <a href="https://archive.org/download/french_in_action">Internet Archive </a> for non-commercial, educational purposes under fair use.
                No files are hosted on this site. If you are a rights holder and wish to request removal, please contact me through <a href="https://github.com/artur-bertash">Github</a>.
                <br></br><br></br>
                The subs are generated using whisper for each episode and may contain errors. If you find any, please consider contributing <a href="https://github.com/artur-bertash/Oubl">here</a>.
            </div>
        </>
    )
}
export default Home