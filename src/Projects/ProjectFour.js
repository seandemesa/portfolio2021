import '../App.css';
import {Menu, Button, MenuItem} from '@material-ui/core';
import {useState, useEffect} from 'react';

function ProjectFour(){

    const[anchorEl, setAnchorEl] = useState(null);
    const[showBossVid, setShowBossVid] = useState(1);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
    const handleClose = (x) => {
        setAnchorEl(null);
    };
    const changeVid = (x) => {
        console.log(x)
        setShowBossVid(x);
        setAnchorEl(null);
    };

    useEffect(()=>{

    },[showBossVid])

    const showVid = () =>{

        if(showBossVid === 1){
            return(
                    <iframe width="70%" height="450" src="https://www.youtube.com/embed/AlHw-gq8gIg" title="YouTube video player"
             frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            )
        }
        else if(showBossVid === 2){
            return(
                <iframe width="70%" height="450" src="https://www.youtube.com/embed/8Q-wQxd4IzM" title="YouTube video player"
                 frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            )
        }else if(showBossVid === 3){
            return(
                <iframe width="70%" height="450" src="https://www.youtube.com/embed/6B5im93P0C8" title="YouTube video player"
                 frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            )
        }else{
            return(
                <iframe width="70%" height="450" src="https://www.youtube.com/embed/J4ymak72zKk" title="YouTube video player"
                 frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            )
        }
    }
 
    return(
        <div className="Questrial"  style ={{textAlign:'center', width: '70%', margin: 'auto', fontSize: 20}}>
            <h1>Citruscide (Bunjiman's Quest)</h1>
            <p>TL;DR : An 8-bit style, 2-D video game with simple controls, but insane difficulty 
                (inspired by  <a href="https://en.wikipedia.org/wiki/Metroidvania" target="_blank" rel="noopener noreferrer">Metroidvania</a> type games
                 &  <a href="http://www.cupheadgame.com/" target="_blank" rel="noopener noreferrer">Cuphead</a>.). </p>

            {showVid()}
            {/* <ShowVid /> */}
            {/* <iframe width="70%" height="450" src="https://www.youtube.com/embed/AlHw-gq8gIg" title="YouTube video player"
             frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            <br/><br/>

            <Button size="large" color = "primary" variant = "contained" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Click here to view more boss fights!
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClick={handleClose}
            >
                <MenuItem onClick={() => changeVid(1)}>Boss 1</MenuItem>
                <MenuItem onClick={() => changeVid(2)}>Boss 2</MenuItem>
                <MenuItem onClick={() => changeVid(3)}>Boss 3</MenuItem>
                <MenuItem onClick={() => changeVid(5)}>Boss 5 (Yes, 5)</MenuItem>
            </Menu>

            <h1>About</h1>
            <p>An 8-bit/retro metroidvania style game that was heavily inspired by Cuphead. Players control Bunjiman, our main character whose magic sword shoots lemons.
                 Why? Because. The controls consists of WASD / arrow keys for movement and space to shoot.
                  The game includes 5 short levels along with 6 bosses that ramp up with difficulty and intensity that are designed to have the player learn from their mistakes frequently in order to defeat them.
                <br/><br/>
                Fun fact! Many of my team members could barely beat the earlier bosses and neglected to even seriously attempt the latter ones despite everyone being self-proclaimed gamers. </p>

            <h1>Technologies Used</h1>
            <p>Unity, C#</p>

            <h1>My Responsibilities</h1>
            <p>Design and implementation of all 6 bosses.</p>
            <p>Player controls and health system. </p>
            <br/><br/><br/><br/>
        </div>
    )
}

export default ProjectFour;