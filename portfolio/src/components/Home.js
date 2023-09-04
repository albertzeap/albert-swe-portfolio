// import {useEffect, useRef} from "react"

import Container from "react-bootstrap/Container";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { BsChevronDoubleDown } from 'react-icons/bs';
import "../styles/home.css"
// import { motion, useInView, useAnimation } from "framer-motion";

export const Home = () => {

    // const ref = useRef(null);
    // const isInView = useInView(ref, {once: true});

    // const mainControls = useAnimation();

    // useEffect(() => {
    //     if(isInView){
    //         mainControls.start("visible");
    //     } else{
    //         mainControls.set("initial");
    //     }
    //     console.log(isInView);
        
    // }, [isInView, mainControls])

    return(
        <Container className="home-bg-wrapper d-flex flex-column justify-content-center">

            <Container className="text-center text-white pb-5" style={{marginBottom: "10rem"}}>
                <p className="fw-bold" style={{color: "#CCDFCB" }}>Hello, my name is</p>
                <h1 className="fw-bold" style={{fontSize: "5em"}}>ALBERT PAEZ</h1>
                <Container className="text-center w-50 py-3">
                    <p className="text-center py-2" style={{color: "#CCDFCB" }}> I am a software engineer/full stack developer that loves to build anything.</p>
                </Container>
          
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

                    {/* <motion.div
                        initial={{opacity: 0, y: 75}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 1, delay: 0.5, staggerChildren: 0.5}}
                    > */}

                    <AnchorLink className="navLink text-white" href="#about"
                       
                       >
                        <p style={{color: "#CCDFCB" }}>Read More</p>
                        <BsChevronDoubleDown size={"2em"}/>
                    </AnchorLink>
                    {/* </motion.div> */}
                    {/* </motion.div> */}
                </Container>
            </Container>
        </Container>
    );
}