import '../App.css';


function ProjectTwo(){
    return(
        <div className="Questrial" style ={{textAlign:'center', width: '70%', margin: 'auto', fontSize: 20}}>
            <h1>Stuff You Watch</h1>
            <p>TL;DR : A web application that allows users to create a personalized list of movies and shows they've watched.</p>

            <iframe width="70%" height="450" src="https://www.youtube.com/embed/0TTV1U64OYY" title="YouTube video player"
             frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
            <p>*Note: Website is currently not active.</p>
            <h1>About</h1>
            <p>A web application that allows users to create a personalized list of movies or TV shows that they've watched. 
                Users can register for an account, search for their movie/show using a search function that utilizes an <a href="https://www.imdb.com/" target="_blank" rel="noopener noreferrer">IMDb</a> API, 
                then add the item to their list which is connected to their account.
                Furthermore, they can adjust the dates they watched, add a personal rating, or add a description to each item </p>

            <h1>Technologies Used</h1>
            <p>React, Node, Express, MySQL (AWS RDS), Heroku</p>

            <h1>My Responsibilities</h1>
            <p>Everything (i.e. Self-project) </p>
            <br/><br/><br/><br/>
        </div>
    )
}

export default ProjectTwo;