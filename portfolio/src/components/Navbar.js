import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import AnchorLink from "react-anchor-link-smooth-scroll";
import Container from 'react-bootstrap/Container';

import "../styles/navbar.css"

export const NavBar = () =>{


    return(
        <Container>

            <Navbar expand="lg" className="bg-transparent" sticky="top">
                <Navbar.Brand className="fw-bold d-flex justify-content-start">
                    <AnchorLink href='#home' className="navLink text-white">Albert Paez</AnchorLink>
                </Navbar.Brand>
                <Navbar.Toggle id="offcanvasNavbarToggle" className="navToggle border border-0 bg-white" aria-controls="offcanvasNavbar-expand-lg"/>
                <Navbar.Offcanvas id="offcanvasNavbar-expand-lg" aria-labelledby="offcanvasNavbarLabel-expand-lg" placement="end" className="text-bg-dark">
                    <Offcanvas.Header closeButton className="text-color-white bg-white">
                        <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg" className="fw-bold text-black">Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="justify-content-end flex-grow-1 align-items-center">
                        <Nav>
                            <Nav.Item className="px-3 py-3">
                                <AnchorLink href="#home" className="navLink fw-bold text-white">
                                    Home
                                </AnchorLink>
                            </Nav.Item>
                            <Nav.Item className="px-3 py-3">
                                <AnchorLink href="#about" className="navLink fw-bold text-white">
                                    About
                                </AnchorLink>
                            </Nav.Item>
                            <Nav.Item className="px-3 py-3">
                                <AnchorLink href="#skills" className="navLink fw-bold text-white">
                                    Skills
                                </AnchorLink>
                            </Nav.Item>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Navbar>
        </Container>
    );
}