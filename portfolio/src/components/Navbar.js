import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import AnchorLink from "react-anchor-link-smooth-scroll";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import resume from '../assets/BasicSWEAlbertPaez.pdf'

import "../styles/navbar.css"

export const NavBar = () =>{


    return(
        // <Container className="">

            <Navbar expand="md" className="bg-transparent" sticky="top">
                <Container>

                <Navbar.Brand className="fw-bold d-flex justify-content-start">
                    <AnchorLink href='#home' className="navLink text-uppercase">A.P.</AnchorLink>
                </Navbar.Brand>
                <Navbar.Toggle id="offcanvasNavbarToggle" className="navToggle border border-0" aria-controls="offcanvasNavbar-expand-lg"/>
                <Navbar.Offcanvas id="offcanvasNavbar-expand-lg" placement="end" className="navOffcanvas" style={{width: "50%"}}>
                    <Offcanvas.Header closeButton className="text-color-white">
                        <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg" className="fw-bold text-white">Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="justify-content-end flex-grow-1 align-items-center">
                        <Nav>
                            {/* <Nav.Item className="px-2 py-2">
                                <AnchorLink href="#home" className="navLink fw-bold">
                                    {'//'} home
                                </AnchorLink>
                            </Nav.Item> */}
                            <Nav.Item className="px-1 py-2">
                                <AnchorLink href="#about" className="navLink fw-bold">
                                {'//'} about
                                </AnchorLink>
                            </Nav.Item>
                            <Nav.Item className="px-1 py-2">
                                <AnchorLink href="#experience" className="navLink fw-bold">
                                {'//'} experience
                                </AnchorLink>
                            </Nav.Item>
                            <Nav.Item className="px-2 py-2">
                                <AnchorLink href="#projects" className="navLink fw-bold">
                                {'//'} projects
                                </AnchorLink>
                            </Nav.Item>
                            <Nav.Item className="px-1 py-2">
                                <AnchorLink href="#contact" className="navLink fw-bold">
                                {'//'} contact
                                </AnchorLink>
                            </Nav.Item>
                            <Nav.Item className="px-1">
                                <Button href={resume} className="navButton fw-bold" target="_blank" title="View Resume. Will open file in new tab.">
                                {'//'} resume
                                </Button>
                            </Nav.Item>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
        // </Container>
    );
}