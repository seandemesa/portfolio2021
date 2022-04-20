import '../App.css';


function ProjectOne(){
    return(
        <div className="Questrial" style={{textAlign: 'center', margin: 'auto', width: '70%', justifyContent: 'center', fontSize: 20}}>
            <h1>Your Finance Tracker</h1>
            <p>TL;DR : A mobile application to help track personal finances.</p>

            <iframe width="70%" height="450" src="https://www.youtube.com/embed/wuHwC8o7sI8" title="YouTube video player"
             frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <h1>About</h1>
            <p>A mobile application that allows users to help track their personal finances by adding purchase information based on a calendar which
                serves as the main UI/UX. The idea is to provide a visual for people so they can understand how much they spend, what credit cards they use
                per purchase, or to track recurring payments, such as rent or services with a subscription. It also provides a way for people to do such 
                things without the need of sensitive information, such as logging into your bank or card numbers.
                <br/><br/>
                Users can create an account (where passwords are encrypted), add/edit/delete payments on the main calendar, they can add/edit/delete recurring payments
                 which update on said calendar, and also search for how much they spent on a something in particular over a certain time
                  (e.g. how much one has spent on coffee in the past month).
            </p>

            <br/>

            <h1>Things That Could Be Improved Upon</h1>
            <h2>Design</h2>
            <p>The main objective of this project was to learn new development skills, not so much the design. Functionally it works, but
                can look/feel better.</p>
            <h2>Cleaner Code</h2>
            <p>The scope of the project wasn't as broad as originally anticipated, so the way things panned out it got a little messy 
                (in addition to learning things along the way). However, if I were to do it over again it would be more efficient & scalable
                 due to the things I've learned. </p>
            <h2>More Features</h2>
            <p>Things such as creating custom notifications (perhaps via change streams?), or allowing app to access camera / photos to add to a payment (
                such as a receipt).</p>
            
            <br/>
            <h1>Technologies Used</h1>
            <p>React Native, Expo, MongoDB, Node, bcrypt, Express</p>

            <h1>My Responsibilities</h1>
            <p>Everything (i.e. Self-project)</p>
            <br/><br/><br/><br/>
        </div>
    )
}

export default ProjectOne;