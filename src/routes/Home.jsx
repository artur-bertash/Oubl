import { useNavigate } from "react-router"

function Home() {
    const navigate = useNavigate() 
    return (
        <div>
            <h1>Oubl — Classic French, modern memory.</h1>
            <div className="buttons">
                <button onClick={() => navigate("/videos")}>Begin</button>
                <button onClick={() => navigate("/learn-more")}>Why not Dualingo</button>
            </div>
            
        </div>
    )
}
export default Home