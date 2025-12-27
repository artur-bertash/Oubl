

function Subtitles({currTime, subs, clickedWord, setClickedWord}) {
    
    // Match the same logic as YouTubePage: start <= currTime < end (exclusive end)
    const cue = subs.find(s => s.start <= currTime && s.end > currTime)
    let isNothing = false
    let sub = ""
    if (cue) {
        sub = cue.text
    } else {
        isNothing = true
    }
    
    return (
        <>
        {!isNothing && <div className="subtitle-line">
            {sub.split(" ").map((word, index) => (
                <span key={index} >
                    <span 
                        className={clickedWord.index === index && clickedWord.word === word ? "clicked-word" : ""} 
                        onClick={() => setClickedWord({index, word})}
                    >
                        {word}
                    </span>
                    {" "}
                </span>
            ))}
        </div>}
        </>
    )
}

export default Subtitles