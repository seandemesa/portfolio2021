import {Grid, Button, Container} from '@material-ui/core';
import {Link} from 'react-router-dom';
import img01 from './Images/YourFinanceTracker02.jpg';
import img02 from './Images/StuffYouWatchLanding.jpg';
import img03 from './Images/TXCovid19Charts.jpg';
import img04 from './Images/CitruscideBosses.jpg';
import img05 from './Images/AIAgentNew.jpg';
import img06 from './Images/ecommerce_web_app.PNG';
import './App.css';

function Projects(){
    return(
        <div className="Questrial" style={{margin: 'auto', width: '90%', justifyContent: 'center', fontSize: 20}}>
            <Container maxWidth="xLg">
                <h1 style = {{textAlign : 'center'}}>Stuff I've Done</h1>
                <br/><br/>
                <Grid
                    container
                    direction = "row"
                    justify = "center"
                    alignItems="center"
                    spacing={5}
                >
                    <Grid item xs ={6} align="center">
                        <img style = {{maxWidth: '100%', borderRadius: '10%'}}src={img06} alt="Sean's shop img"/>
                    </Grid>
                    <Grid item xs ={6} align="center">
                        <h2>Sean's Shop</h2>
                        <p>An e-commerce website with JWT user authentication.</p>
                        <Link to = "/portfolio2021/projects/SeansShop">
                            <Button variant="contained" color="primary">
                                Check out more
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs ={6} align="center">
                        <h2>Your Finance Tracker</h2>
                        <p>A mobile application to help track personal finances.</p>
                        <Link to = "/portfolio2021/projects/YourFinanceTracker">
                            <Button variant="contained" color="primary">
                                Check out more
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs ={6} align="center">
                        <img style = {{maxWidth: '100%', borderRadius: '10%'}}src={img01} alt="Your Finance Tracker img"/>
                    </Grid>
                    
                    <Grid item xs ={6} align="center">
                        <img style = {{maxWidth: '100%', borderRadius: '10%'}}src={img02} alt="Stuff You Watch Landing img"/>
                    </Grid>
                    <Grid item xs ={6} align="center">
                        <h2>Stuff You Watch</h2>
                        <p>A web application that allows you to create a personalized list of movies and shows you've watched.</p>
                        <Link to = "/portfolio2021/projects/StuffYouWatch">
                            <Button variant="contained" color="primary">
                                Check out more
                            </Button>
                        </Link>
                    </Grid>

                    <Grid item xs ={6} align="center">
                        <h2>Texas COVID-19 Visualization</h2>
                        <p>A web application that visualizes data about COVID-19 in Texas into charts. </p>
                        <Link to = "/portfolio2021/projects/TXCovidData">
                            <Button variant="contained" color="primary">
                                Check out more
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs ={6} align="center">
                        <img style = {{maxWidth: '100%', borderRadius: '10%'}}src={img03} alt="TX Covid Charts img"/>
                    </Grid>

                    <Grid item xs ={6} align="center">
                        <img style = {{maxWidth: '100%', borderRadius: '10%'}}src={img04} alt="Citruscide Bosses img"/>
                    </Grid>
                    <Grid item xs ={6} align="center">
                        <h2>Citruscide (Bunjiman's Quest)</h2>
                        <p>A 2-D video game with simple controls, but insane difficulty (inspired by Metroidvania & Cuphead).</p>
                        <Link to = "/portfolio2021/projects/Citruscide">
                            <Button variant="contained" color="primary">
                                Check out more
                            </Button>
                        </Link>
                    </Grid>

                    <Grid item xs ={6} align="center">
                        <h2>A.I. Agent</h2>
                        <p>An agent who learns from its environment and attempts to optimize its future paths. </p>
                        <Link to = "/portfolio2021/projects/AIAgent">
                            <Button variant="contained" color="primary">
                                Check out more
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs ={6} align="center">
                        <img style = {{maxWidth: '70%', borderRadius: '10%', height: '40%'}}src={img05} alt="AI agent img"/>
                    </Grid>
                    
                </Grid>
            </Container>
            <br/><br/><br/><br/>
        </div>
    )
}

export default Projects;