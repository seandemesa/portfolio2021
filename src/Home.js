import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin}  from '@fortawesome/free-brands-svg-icons';

function Home(){

    return(
        <div>
            <div className="Questrial" style={{textAlign: 'center', fontSize: 30}}>
                <h1>Howdy, I'm Sean.</h1>
                <p>Software developer in the making.</p>
                <br/>
                <a href="https://www.linkedin.com/in/sean-de-mesa-54378b17a" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'inherit'}}>
                    <FontAwesomeIcon icon={faLinkedin} size= "2x"/>
                </a>
                &emsp;&emsp;
                <a href="https://github.com/seandemesa" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'inherit'}}>
                    <FontAwesomeIcon icon={faGithub} size= "2x"/>
                </a>
            </div>
        </div> 
    )
}

export default Home;