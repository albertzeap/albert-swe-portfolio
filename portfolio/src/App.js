import { BrowserRouter} from "react-router-dom";
import { NavBar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/app.css"
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";


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
          {/* <Navbar fixed="bottom">
            <Container className="d-flex justify-content-end px-5" fluid>
              <AnchorLink className="" href="#home">home</AnchorLink>
            </Container>
          </Navbar> */}
        </section>


        <section id="experience">
          <Experience/>
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
