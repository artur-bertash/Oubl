
import { useNavigate } from "react-router" 
import "../styles/GoBack.css"

function GoBack() {
    const navigate = useNavigate()

    return (
        <div className="go-back buttons">
        
        <button className="go-back" onClick={() => navigate(-1)}>Go Back</button>
        </div>
    )
}

export default GoBack