"use client"

import { Container } from "react-bootstrap";



export default function Construction (){

    return(
        <Container className="home-bg-wrapper d-flex flex-column justify-content-center">

            <Container className="text-center pb-5" style={{marginBottom: "10rem"}}>
                <p className="fw-bold">Hey, looks like this page is</p>
                <h1 className="fw-bold">UNDER CONSTRUCTION</h1>
                <Container className="text-center w-50 py-3">
                    <p className="text-center py-2">Come back soon and maybe I'll be done by then :)</p>
                </Container>
          
                <Container className="d-flex flex-column justify-content-end h-50 w-25">

                </Container>
            </Container>
        </Container>
    );
}