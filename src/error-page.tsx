import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error : any = useRouteError();
    console.error(error);

    return (
        <div id='error-page'>
            <h1>Oops!</h1>
            <p>Something went wrong. Sorry!</p>
            <p>{error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorPage