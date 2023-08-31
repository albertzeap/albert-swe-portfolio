import { BrowserRouter} from "react-router-dom";
import { NavBar } from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container"
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Skills } from "./components/Skills";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />

        <section id="home">
          <Home/>
        </section>

        <section id="about">
          <About/>
        </section>

        <section id="skills">
          <Skills/>
        </section>

      </div>
    </BrowserRouter>
  );
}

export default App;
