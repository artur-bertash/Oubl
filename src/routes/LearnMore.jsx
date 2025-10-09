import "../styles/LearnMore.css"
import "../App.css"
import GoBack from "../components/GoBack"

function LearnMore() {
    return (
        <>
        <GoBack />
        <div className="learn-more">    
            <div className="wrapper">

            
            <h2>Translation Kills Fluency</h2>
            <div>
                The brain can’t process two languages at once. Real fluency comes from direct input — not switching back and forth.  <a href="https://en.wikipedia.org/wiki/French_in_Action" target="_blank" rel="noopener noreferrer">
                     French in Action
                </a> is 100% in French. No English. It uses immersion, the method backed by research in second language acquisition.
                <br></br><br></br>
                Such hidden gem was completely lost and forgotten in the age of Dualingo with billions to spend on ads. I bring new life to this course with Anki spaced repetition integration and LLMs grammar explanation.
            </div>
            </div>
            <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGg0a3R4dmZkMDA1bGRhMmkza2M4ZzJlM3dvODk4aGtkZzZhdGN6cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pGKwT5JXyNWm6JmJE4/giphy.gif"></img>
        
        </div>
        </>
    );
}

export default LearnMore