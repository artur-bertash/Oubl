import Home from "./routes/Home"
import Videos from "./routes/Videos"
import LearnMore from "./routes/LearnMore"

const routes = [
    {
        path: "/",
        element: <Home/>
    }, 
    {
        path: "/videos",
        element: <Videos/>
    },
    {
        path: "/learn-more",
        element: <LearnMore/>
    }
]

export default routes