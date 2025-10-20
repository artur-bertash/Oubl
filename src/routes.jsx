import Home from "./routes/Home"
import Videos from "./routes/Videos"
import LearnMore from "./routes/LearnMore"
import VideoPage from "./routes/VideoPage"
import Error from "./routes/Error"

const routes = [
    {
        path: "/",
        element: <Home/>,
        errorElement: <Error/>
    }, 
    {
        path: "/videos",
        element: <Videos/>,
        children: [{
            path: "videos/:episodeID",
            element: <VideoPage/>
        }]
    },
    {
        path: "/learn-more",
        element: <LearnMore/>
    },
    {
        path: "videos/:videoId",
        element: <VideoPage/>
    }
]

export default routes