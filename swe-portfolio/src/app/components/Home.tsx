import Container from "react-bootstrap/Container";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { BsChevronDoubleDown } from 'react-icons/bs';

import { motion } from "framer-motion";
import { TypingAnimation } from "../animations/TypingAnimation";
import { HomeProps } from "../page";



export const Home: React.FC<HomeProps> = ({prefersReducedMotion}) => {
    
    console.log(prefersReducedMotion)
 
    return(
        <>
        
            <Container className="home-bg-wrapper d-flex flex-column justify-content-center">



                <Container className="text-center text-white pb-5" style={{marginBottom: "10rem"}}>
                    <p className="fw-bold" style={{color: "#CCDFCB" }}>👋Hello, my name is</p>
                    <h1 className="fw-bold" style={{fontSize: "5em"}}><TypingAnimation text="ALBERT PAEZ"/></h1>
        
                   
                       
                    <motion.div initial={{opacity: 0, y: -75}} animate={{opacity: 1, y: 0}} transition={{delay: 4}}>
                        <Container className="text-center w-50 py-3">
                            <p className="text-center py-2" style={{color: "#CCDFCB" }}> I am a software engineer/full stack developer that loves to build.</p>
                        </Container>
                    </motion.div>
            
                    <Container className="d-flex flex-column justify-content-end h-50 w-25">

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

                                <AnchorLink className="navLink text-white" href="#about" role="button" tabIndex={0}>
                                    <Container tabIndex={-1}>
                                        <p style={{color: "#CCDFCB" }} tabIndex={-1}>Read More</p>
                                        <BsChevronDoubleDown size={"2em"} tabIndex={-1} role="non"/>
                                    </Container>
                                </AnchorLink>
                            </motion.div>
                        </motion.div>
                    </Container>
                     

                </Container>
                        
            </Container>
        </>
    );
}