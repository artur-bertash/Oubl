import { useNavigate } from "react-router"

function Home() {
    const navigate = useNavigate() 
    return (
        <>
        
        <div className="wrapper-home">
            <h1>Oubl — Classic French, modern memory.</h1>
            <div className="buttons">
                <button onClick={() => navigate("/videos")}>Begin</button>
                <button onClick={() => navigate("/learn-more")}>Why not Dualingo</button>
            </div>
            
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