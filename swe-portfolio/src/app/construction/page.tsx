"use client"

import { Container } from "react-bootstrap";
import { Cursor } from "../components/Cursor";
import { motion } from "framer-motion";



export default function Construction (){

    return(
        <>
        <Cursor/>
        

        <Container className="d-flex flex-column justify-content-center text-center" style={{height: "80vh"}}>
            <motion.p drag dragElastic={0.8} dragConstraints={{left: -100, top:-100, right:100, bottom: 100}} style={{cursor: "grab"}} className="fw-bold">Hey, looks like this page is</motion.p>
            <motion.h1 drag dragElastic={0.8} dragConstraints={{left: -100, top:-100, right:100, bottom: 100}} style={{cursor: "grab"}} className="fw-bold">UNDER CONSTRUCTION</motion.h1>
            <motion.p drag dragElastic={0.8} dragConstraints={{left: -100, top:-100, right:100, bottom: 100}} style={{cursor: "grab"}}  className="text-center py-2">Come back soon and maybe I'll be done by then :)</motion.p>
        </Container>
        
        </>
    );
}