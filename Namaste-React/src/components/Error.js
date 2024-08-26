import { useRouteError } from "react-router-dom";
//Hook used to Show Error on the Error Page

const Error = () => {

    const err = useRouteError();
    console.log(err);
    
    return(
        <div>
            <h1>Eat My Ass</h1>
            <h2>{err.status}: {err.statusText}</h2>
        </div>
    )
}
export default Error;