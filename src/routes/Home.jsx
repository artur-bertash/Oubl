import { useNavigate } from "react-router"

function Home() {
    const navigate = useNavigate() 
    return (
        <div>
            <h1>Oubl — Classic French, modern memory.</h1>
            <button onClick={() => navigate("/videos")}>Begin</button>
            <button onClick={() => navigate("learn-more")}>Learn more</button>
        </div>
    )
}
export default Home