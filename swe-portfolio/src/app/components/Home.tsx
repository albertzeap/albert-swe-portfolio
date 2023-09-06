import {useEffect, useRef} from "react"

import Container from "react-bootstrap/Container";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { BsChevronDoubleDown } from 'react-icons/bs';

// import "../styles/home.css"
import { motion, useInView, useAnimation, useScroll } from "framer-motion";
import { TypingAnimation } from "../animations/TypingAnimation";

export const Home = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView){
            mainControls.start("visible");
        } else{
            mainControls.set("initial");
        }
        console.log(isInView);
        
    }, [isInView, mainControls])

   

    return(
        <Container className="home-bg-wrapper d-flex flex-column justify-content-center">

           


            <Container className="text-center text-white pb-5" style={{marginBottom: "10rem"}}>
                <p className="fw-bold" style={{color: "#CCDFCB" }}>Hello, my name is</p>

                {/* <motion.div
                    initial={{opacity: 0, y: -75}}
                    whileInView={{opacity: 1, y: 0}}
                    
                    transition={{ease: "easeOut", duration: 0.25}}

                > */}
                    <h1 className="fw-bold" style={{fontSize: "5em"}}><TypingAnimation text="ALBERT PAEZ"/></h1>
                {/* </motion.div> */}
             
                <motion.div initial={{opacity: 0, y: -75}} animate={{opacity: 1, y: 0}} transition={{delay: 4}}>

                    <Container className="text-center w-50 py-3">
                        <p className="text-center py-2" style={{color: "#CCDFCB" }}> I am a software engineer/full stack developer that loves to build anything.</p>
                    </Container>
                </motion.div>
          
                <Container className="d-flex flex-column justify-content-end h-50 w-25">

                    {/* <motion.div
                        variants={{
                            hidden: {opacity: 0, y: 75},
                            visible: {opacity: 1, y: 0}
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{duration: 5, delay: 0.5, staggerChildren:0.5}}
                    > */}

                    <motion.div
                        initial={{opacity: 0, y: -75}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 5}}
                    >
                        <motion.div
                          whileTap={{
                            scale: 1.15,
                            transition: {duration: 0.10}
                            }}
                            whileHover={{
                                scale: 1.15,
                                transition: {duration: 0.10}
                            }}
                        >

                            <AnchorLink className="navLink text-white" href="#about">
                                <p style={{color: "#CCDFCB" }}>Read More</p>
                                <BsChevronDoubleDown size={"2em"}/>
                            </AnchorLink>
                            
                        </motion.div>
                    </motion.div>
                    {/* </motion.div> */}
                </Container>
            </Container>
                       
        </Container>
    );
}