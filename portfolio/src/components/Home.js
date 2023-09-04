import Container from "react-bootstrap/Container";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { BsChevronDoubleDown } from 'react-icons/bs';
import "../styles/home.css"

export const Home = () => {

    return(
        <Container className="home-bg-wrapper d-flex flex-column justify-content-center">
            <Container className="text-center text-white pb-5" style={{marginBottom: "10rem"}}>
                <p className="fw-bold" style={{color: "#CCDFCB" }}>Hello, my name is</p>
                <h1 className="fw-bold" style={{fontSize: "5em"}}>ALBERT PAEZ</h1>
                <Container className="text-center w-50 py-3">
                    <p className="text-center py-2" style={{color: "#CCDFCB" }}> I am a software engineer/full stack developer that loves to build anything.</p>
                </Container>
                
                <Container className="d-flex flex-column justify-content-end h-50 w-25">
                    <AnchorLink className="navLink text-white" href="#about">
                        <p style={{color: "#CCDFCB" }}>Read More</p>
                        <BsChevronDoubleDown size={"2em"}/>
                    </AnchorLink>
                </Container>
            </Container>
        </Container>
    );
}