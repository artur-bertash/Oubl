

function Subtitles({currTime, subs, clickedWord, setClickedWord}) {
    
    const cue = subs.find(s=> s.start <= currTime && s.end >= currTime)
    console.log(currTime)
    let sub = ""
    if (cue) {
        sub = cue.text
    } 
    
    return (
        <div className="subs">
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
        </div>
    )
}

export default Subtitles