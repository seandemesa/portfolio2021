import './App.css'


function About(){
    return(
        <div className="Questrial" style={{textAlign: 'center', margin: 'auto', width: '70%', justifyContent: 'center', fontSize: 19}}>
            <h1>About Me</h1>
            <h2>Who is Sean?</h2>
            <p>I'm a graduate from the University of Houston with a B.S. in computer science and minor in mathematics. I'm passionate about learning
                new technologies, solving problems, and always strive for excellence. My studies had a heavy focus on object-oriented programming,
                data structures, and algorithms. However, on my own I've continued to learn new and relevant technologies.
            </p>
            <p>In my free time I love to watch movies, binge shows, work out, cook, play video games, and draw.</p>
            <h2 style={{textDecoration: 'underline'}}>Skills</h2>
            <h3>Object-Oriented Programming</h3>
            <p>C++  &nbsp;|&nbsp;  C#  &nbsp;|&nbsp;   Java  &nbsp;|&nbsp;  Python</p>
            <h3>Full Stack</h3>
            <p>ASP.NET Core  &nbsp;|&nbsp;  React  &nbsp;|&nbsp;  React Native  &nbsp;|&nbsp;  JavaScript  &nbsp;|&nbsp;  HTML  &nbsp;|&nbsp;  CSS  &nbsp;|&nbsp;  Vue  
            &nbsp;|&nbsp;  Node  &nbsp;|&nbsp;  Express</p>
            <h3>Databases</h3>
            <p>SQL (MySQL)  &nbsp;|&nbsp;  NoSQL (MongoDB)  &nbsp;|&nbsp;  Microsoft SQL Server</p>
            <h3>Other</h3>
            <p>Go  &nbsp;|&nbsp;  GraphQL  &nbsp;|&nbsp;  API  &nbsp;|&nbsp;  Git  &nbsp;|&nbsp;
                  MVC  &nbsp;|&nbsp;  BeautifulSoup  &nbsp;|&nbsp;  Flask</p>
            <br/>
            <h2 style={{textDecoration: 'underline'}}>Things I Aim to Learn</h2>
            <p>Flutter  &nbsp;|&nbsp;  Spring / Spring Boot  &nbsp;|&nbsp;  J2EE  &nbsp;|&nbsp;  Swift    &nbsp;|&nbsp;  Django   &nbsp;|&nbsp;  Docker/Kubernetes</p>
            <br/><br/><br/><br/>
        </div>
    )
}

export default About;