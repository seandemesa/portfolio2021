import { Link } from "react-router-dom";

function NotFound(){
    return ( 
        <div style={{textAlign: "center"}}>
            <h2>ERROR</h2>
            <p>That page cannot be found.</p>
            <Link to="/portfolio2021/">Back to the homepage</Link>
        </div>
     );
}
 
export default NotFound;