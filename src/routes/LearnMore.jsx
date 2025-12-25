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
                        You can’t translate your way out of a broken language. I found this gem called{" "}
                        <a
                            href="https://en.wikipedia.org/wiki/French_in_Action"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            French in Action
                        </a>.
                        It’s 100% in French and was created by a mega cracked professor, Pierre Jean, at Yale.
                        <br /><br />
                        The main task of this project is to simplify a process called “sentence/word mining”:
                        finding useful sentences and then using tools like{" "}
                        <a href="https://en.wikipedia.org/wiki/Anki_(software)">Anki</a> to memorize them.
                        <br /><br />
                        There’s a lot of science behind why you should use Anki to memorize things.
                        It uses spaced-repetition{" "}
                        <a href="https://faqs.ankiweb.net/what-spaced-repetition-algorithm">algorithms</a>{" "}
                        that show you information right before you’re about to forget it, maximizing
                        retention and reducing time spent learning.
                    </div>
                </div>
                <img
                    src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGg0a3R4dmZkMDA1bGRhMmkza2M4ZzJlM3dvODk4aGtkZzZhdGN6cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pGKwT5JXyNWm6JmJE4/giphy.gif"
                    alt="Learning animation"
                />
            </div>
        </>
    )
}

export default LearnMore
