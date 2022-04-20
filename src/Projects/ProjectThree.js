import img01 from '../Images/TXCovid19Charts.jpg';
import '../App.css';

function ProjectThree(){
    return(
        <div className="Questrial"  style ={{textAlign:'center', width: '70%', margin: 'auto', fontSize: 20}}>
            <h1>Texas COVID-19 Visualization</h1>
            <p>TL;DR : Full stack web application that visualizes data about COVID-19 in Texas into charts. </p>

            <img style = {{maxWidth: '70%', borderRadius: '10%'}}src={img01} alt="TX Covid Charts img"/>

            <p>*Note: Website is currently not active. A demo could not be achieved in time either because, unknowingly,
                the amount of data far surpassed the free tier database, leading to unexpected payments.
            </p>

            <h1>About</h1>
            <p>Website which visualizes data about COVID-19 in Texas into various charts. 
                Data is extrapolated from  <a href="https://dshs.texas.gov/coronavirus/additionaldata.aspx" target="_blank" rel="noopener noreferrer">https://dshs.texas.gov/coronavirus/additionaldata.aspx</a> in an excel file.
                 It is run through scripts which converts each sheet into seperate .csv files which are then inputted appropriately into MySQL tables. 
                 Data from database is then called from the front end and visualized into appropriate charts. </p>

            <h1>Technologies Used</h1>
            <p>Vue.js, vue-chartjs, Node, Express, MySQL (AWS RDS), Heroku </p>

            <h1>My Responsibilities</h1>
            <p>Everything (i.e. Self-project)</p>
            <br/><br/><br/><br/>
        </div>
    )
}

export default ProjectThree;