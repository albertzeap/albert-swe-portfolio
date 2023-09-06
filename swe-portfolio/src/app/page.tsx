"use client"
import { NavBar } from './components/Navbar'
import { Home } from './components/Home'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'


// import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from './styles/page.module.css'

export default function App() {
  return (
    <>
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
    </>
  )
}
