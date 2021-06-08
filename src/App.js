import "./App.css";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import {
  HashRouter as Router,
  Switch,
  Route} from "react-router-dom";
function App() {
  return (
    <>

      <Router >
      <Navbar></Navbar>
      <main>
        <Switch>
        <Route exact path="/">
        

        </Route>
        <Route></Route>


        </Switch>
      </main>
      <Footer></Footer>
      
      
      </Router>
    </>
  );
}

export default App;
