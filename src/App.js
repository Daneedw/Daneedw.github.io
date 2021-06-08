import "./App.css";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import {
  HashRouter as Router,
  Switch,
  Route} from "react-router-dom";
import AboutMe from "./pages/AboutMe";
function App() {
  return (
    <>

      <Router >
      <Navbar></Navbar>
      <main>
        <Switch>
        <Route exact path="/">
        <Projects>
          
        </Projects>

        </Route>
        <Route exact path="/AboutMe">
        <AboutMe>
          
        </AboutMe>

        </Route>
        <Route exact path="/contact">
        <Contact>
          
        </Contact>
        </Route>


        </Switch>
      </main>
      <Footer></Footer>
      
      
      </Router>
    </>
  );
}

export default App;
