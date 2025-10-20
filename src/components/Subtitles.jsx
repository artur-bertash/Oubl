
import "../styles/Subtitles.css"
function Subtitles({currTime, subs}) {
    const cue = subs.find(s=> s.start <= currTime && s.end >= currTime)
    console.log(currTime)
    return (
        <div>
            {cue ? cue.text : ""}
        </div>
    )
}

export default Subtitles