import Home from './Home';
import NotFound from './NotFound';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import ProjectOne from './Projects/ProjectOne';
import ProjectTwo from './Projects/ProjectTwo';
import ProjectThree from './Projects/ProjectThree';
import ProjectFour from './Projects/ProjectFour';
import ProjectFive from './Projects/ProjectFive';
import ProjectSix from './Projects/ProjectSix';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="HAUH">
        <NavBar />
        <div>
          <Switch>
            <Route exact path = "/portfolio2021">
              <Home />
            </Route>
            <Route exact path = "/portfolio2021/about">
              <About />
            </Route>
            <Route exact path = "/portfolio2021/projects">
              <Projects />
            </Route>
            <Route exact path = "/portfolio2021/projects/YourFinanceTracker">
              <ProjectOne />
            </Route>
            <Route exact path = "/portfolio2021/projects/StuffYouWatch">
              <ProjectTwo />
            </Route>
            <Route exact path = "/portfolio2021/projects/TXCovidData">
              <ProjectThree />
            </Route>
            <Route exact path = "/portfolio2021/projects/Citruscide">
              <ProjectFour />
            </Route>
            <Route exact path = "/portfolio2021/projects/AIAgent">
              <ProjectFive />
            </Route>
            <Route exact path = "/portfolio2021/projects/SeansShop">
              <ProjectSix />
            </Route>
            <Route exact path = "/portfolio2021/contact">
              <Contact />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;