"use client"
import { NavBar } from './components/Navbar'
import { Home } from './components/Home'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { motion, useReducedMotion, useScroll } from 'framer-motion'
import { Cursor } from './components/Cursor'


// import 'bootstrap/dist/css/bootstrap.min.css';


export interface HomeProps {
  prefersReducedMotion: boolean;
}

export default function App() {

  const { scrollYProgress } = useScroll();
  const reduced = useReducedMotion();
  const prefersReducedMotion = reduced === null ? false : true;

  return (
    <>
      <Cursor/>
      <main>
      

        <motion.div className="progress-bar" style={{scaleX: scrollYProgress}}/>
        <section id="home">
            <NavBar/>
            
            <Home prefersReducedMotion={prefersReducedMotion}/>
            
          </section>

        
          <section id="about">
            <About prefersReducedMotion={prefersReducedMotion}/>
          </section>
        


          <section id="experience">
            <Experience prefersReducedMotion={prefersReducedMotion}/>
          </section>

          <section id="projects">
            <Projects prefersReducedMotion={prefersReducedMotion}/>
          </section>
      </main>
      <footer id="contact" className="footerSection">
        <Contact/>
      </footer>
      
    </>
  )
}
