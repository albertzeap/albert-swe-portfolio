import { BrowserRouter} from "react-router-dom";
import { NavBar } from "./components/Navbar";
import Container from "react-bootstrap/Container"
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Skills } from "./components/Skills";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/app.css"
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Work } from "./components/Work";

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <section id="home">
          <NavBar />
          <Home/>
        </section>

        <section id="about">
          <About/>
        </section>


        <section id="skills">
          <Skills/>
        </section>
        
        <section id="work">
          <Work/>
        </section>

        <section id="projects">
          <Projects/>
        </section>

        <section id="contact">
          <Contact/>
        </section>

      </div>
    </BrowserRouter>
  );
}

export default App;
