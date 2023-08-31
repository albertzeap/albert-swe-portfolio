import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';

import "../styles/home.css"
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Home = () => {

    return(
        <Container className="home-bg-wrapper d-flex flex-column justify-content-center">
            <Container className="text-center text-white mb-5">
                <h1>ALBERT PAEZ</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <Button>
                    <AnchorLink className="navLink text-white" href="#about">Read More</AnchorLink>
                </Button>
            </Container>
        </Container>
    );
}