


import { BrowserRouter} from "react-router-dom";
import { NavBar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/app.css"
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";



function App() {

  return (
    <BrowserRouter>
     <div className="App">



      <main>

      
  

        <section id="home">
          <NavBar />
          <Home/>
        </section>


        <section id="about">
          <About/>
         
        </section>


        <section id="experience">
          <Experience/>
        </section>

        <section id="projects">
          <Projects/>
        </section>

      
       
      </main>
        <footer id="contact" className="footerSection">
          <Contact/>
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;
