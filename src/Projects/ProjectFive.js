import '../App.css';
import {Menu, Button, MenuItem} from '@material-ui/core';
import {useState, useEffect} from 'react';

function ProjectFive(){

    const[anchorEl, setAnchorEl] = useState(null);
    const[showExperiment, setShowExperiment] = useState(1);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
    const handleClose = (x) => {
        setAnchorEl(null);
    };
    const changeVid = (x) => {
        console.log(x)
        setShowExperiment(x);
        setAnchorEl(null);
    };

    useEffect(()=>{

    },[showExperiment])

    const showVid = () =>{

        if(showExperiment === 1){
            return(
                <iframe width="70%" height="415" src="https://www.youtube.com/embed/7EwIX77Ch0A" title="YouTube video player"
                 frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            )
        }
        else if(showExperiment === 2){
            return(
                <iframe width="70%" height="415" src="https://www.youtube.com/embed/yvd8nlgwLDU" title="YouTube video player"
                 frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            )
        }else{
            return(
                <iframe width="70%" height="415" src="https://www.youtube.com/embed/CxnGp9lrSL0" title="YouTube video player"
                 frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            )
        }
    }
 
    return(
        <div className="Questrial"  style ={{textAlign:'center', width: '70%', margin: 'auto', fontSize: 20}}>
            <h1>A.I. Agent</h1>
            <p>TL;DR : An agent who learns from its environment and attempts to optimize its future paths. </p>

            {showVid()}
            {/* <ShowVid /> */}
            {/* <iframe width="70%" height="450" src="https://www.youtube.com/embed/AlHw-gq8gIg" title="YouTube video player"
             frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            <br/><br/>

            <Button size="large" color = "primary" variant = "contained" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Click here to view more experiments!
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClick={handleClose}
            >
                <MenuItem onClick={() => changeVid(1)}>Experiment 1</MenuItem>
                <MenuItem onClick={() => changeVid(2)}>Experiment 4</MenuItem>
                <MenuItem onClick={() => changeVid(3)}>Experiment 5</MenuItem>
            </Menu>

            <h1>About</h1>
            <p>An agent is tasked with the objective of finding pickup spots (spaces in the matrix which the agent can "pick up" an object) 
                to carry over to a dropoff spot (spaces in the matrix which the agent can "drop off " the object) and repeat this process until 
                every pickup spot is empty and every dropoff spot is full. 
                <br/><br/>
                Some experiments involve swapping the pickup and dropoff locations to see how the agent will adjust given its current knowledge.
                <br/><br/>
                It utilizes a combination of different reinforcement learning algorithms (
                <a href="https://en.wikipedia.org/wiki/Q-learning" target="_blank" rel="noopener noreferrer">Q-Learning</a> & <a href="https://en.wikipedia.org/wiki/State%E2%80%93action%E2%80%93reward%E2%80%93state%E2%80%93action" target="_blank" rel="noopener noreferrer">SARSA</a>) 
                and policies which decide its behavior to try and effectively learn the world. In the above video(s), 
                the green numbers represent a more favorable path to the agent based on its previous behavior, whilst the red represent a more negative path. </p>

            <h1>Technologies Used</h1>
            <p>Python, pygame</p>

            <h1>My Responsibilities</h1>
            <p>Creating a visual for the data to see the agent act in near real-time </p>
            <p>Combining team members code</p>
            <br/><br/><br/><br/>
        </div>
    )
}

export default ProjectFive;