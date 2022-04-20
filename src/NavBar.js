import { Link } from 'react-router-dom';
import { Breadcrumbs} from '@material-ui/core';
import './App.css';

function NavBar(){
    return (
        <div>
            <br/><br/>
            <div style = {{display: 'flex', alignItem : 'center', justifyContent : 'center'}}>
                <Breadcrumbs aria-label="breadcrumb" separator=" ">
                    <Link to = "/portfolio2021/" className="Questrial" style={{textDecoration: 'none', fontSize: 25}}>
                        Home
                    </Link>
                    <br/>
                    <Link to = "/portfolio2021/about" className="Questrial" style={{textDecoration: 'none', fontSize: 25}}>
                        About Me
                    </Link>
                    <br/>
                    <Link to = "/portfolio2021/projects" className="Questrial" style={{textDecoration: 'none', fontSize: 25}}>
                        Projects
                    </Link>
                    <br/>
                    <Link to = "/portfolio2021/contact" className="Questrial" style={{textDecoration: 'none', fontSize: 25}}>
                        Contact Me
                    </Link>
                </Breadcrumbs>
            </div>
            <br/><br/>
        </div>
    );
}
 
export default NavBar;