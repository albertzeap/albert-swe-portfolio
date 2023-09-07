import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import { PiElevatorFill } from 'react-icons/pi'
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Contact = () => {
    return(

        <Container className="py-5">
            <h2 className="text-center py-4 text-uppercase fw-bold fs-3">Thanks for visiting my page!</h2>
            <hr></hr>
            <Row className="">
                <Col xs={12} sm={12} md={6}  className="d-flex flex-column align-items-center py-4">
                    

                    <h3 className="fs-4 fw-bold">Here are some of my social accounts.</h3>
                    <p>You can check them out if you want...you should check them out {`:)`}</p>
                    <Container id="socials" className="d-flex justify-content-center">
                    <a id="contactLinkedIn" href="https://www.linkedin.com/in/albert-paez-30501a1b5" target="_blank" rel="noreferrer" className="projectLink" aria-labelledby="contactLinkedIn socials" title="Visit LinkedIn Profile. Will open new tab.">
                        <BsLinkedin className="mx-3" size={"1.5em"}/>
                        <span className="visually-hidden">LinkedIn Profile</span>
                    </a>
                    <a id="contactGithub" href="https://github.com/albertzeap" target="_blank" rel="noreferrer" className="projectLink" aria-labelledby="contactGithub socials" title="Visit GitHub Profile. Will open new tab." >
                        <BsGithub className="mx-3" size={"1.5em"}/>
                        <span className="visually-hidden">GitHub Profile</span>
                    </a>
                    </Container>
                    
                </Col>
                <Col xs={12} sm={12} md={6} className="d-flex flex-column align-items-center py-4">
                
                    <h3 className="fs-4 fw-bold">Have questions? Want to talk?</h3>
                    <p>I sort of check my emails a lot so feel free to send a message my way!</p>
                    <Button className="workButtons" href="mailto:albertzeap@gmail.com">Launch a polite email attack</Button>
                    
                </Col>

            </Row>
            <hr></hr>
            <Container className="d-flex flex-column align-items-center">
                <p className="fw-bold">Need a lift back to the top? No worries I got you covered.</p>
                <p>(Click the elevator icon)</p>
                <AnchorLink href="#home">
                    <PiElevatorFill size={"2em"}/>
                    <span className="visually-hidden">Scroll to top</span>
                </AnchorLink>
            </Container>
        </Container>
    );
}