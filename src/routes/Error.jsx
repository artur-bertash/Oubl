import { useRouteError } from "react-router-dom"
function Error() {
    const error = useRouteError()
    console.log(error)
    return (
        <div id="error-page">
            <h3>Oops! </h3>
            <p>Sorry unexpected error has occured.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default Error