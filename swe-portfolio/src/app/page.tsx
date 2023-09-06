"use client"
import { NavBar } from './components/Navbar'
import { Home } from './components/Home'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { motion, useScroll } from 'framer-motion'
import { Cursor } from './components/Cursor'


// import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from './styles/page.module.css'

export default function App() {

  const { scrollYProgress } = useScroll();

  return (
    <>
    {/* <Cursor/> */}
    <main>
     

      <section id="home">
          <NavBar />
          <motion.div className="progress-bar" style={{scaleX: scrollYProgress}}/>
          
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
      {console.log(scrollYProgress)}
    </>
  )
}
