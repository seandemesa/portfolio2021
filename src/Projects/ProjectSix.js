import '../App.css';


function ProjectSix(){
    return(
        <div className="Questrial" style={{textAlign: 'center', margin: 'auto', width: '70%', justifyContent: 'center', fontSize: 20}}>
            <h1>Sean's Shop</h1>
            <p>TL;DR : An e-commerce website with JWT user authentication.</p>

            <iframe width="70%" height="450" src="https://www.youtube.com/embed/tpTPFP-sxj0" title="YouTube video player"
             frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <h1>About</h1>
            <p>A mock e-commerce website that provides books, movies, and video games for sale. Features include a search bar, pagination upon search, a 
                 user profile page, authentication of users via JSON Web Tokens (JWT), security of sensitive user info through salt & hash, and payment & 
                 payment security through <a href="https://stripe.com/" target="_blank" rel="noopener noreferrer">Stripe</a>. 
                  Certain users can be distinguished as admins and can add/edit/delete categories, product types, or any individual products.
                  The code lends itself to being scalable, so increasing the amount or variations in products and pages wouldn't be an issue.
                <br/><br/>
            </p>

            <br/>

            <h1>Things That Could Be Improved Upon</h1>
            <h2>More Features</h2>
            <p>Things such as more admin features.</p>
            
            <br/>
            <h1>Technologies Used</h1>
            <p>ASP.NET Core, Blazor Web Assembly, Microsoft SQL Server, Stripe, JWT</p>

            <h1>My Responsibilities</h1>
            <p>Everything (i.e. Self-project)</p>
            <br/><br/><br/><br/>
        </div>
    )
}

export default ProjectSix;