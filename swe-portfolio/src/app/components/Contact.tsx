import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

export const Contact = () => {
    return(

        <Container className="py-5">
            <h1 className="text-center py-4 text-uppercase fw-bold fs-3">Thanks for visiting my page!</h1>
            <Row className="">
                <Col xs={12} sm={12} md={6}  className="d-flex flex-column align-items-center py-4">
                    

                    <h2 className="fs-4 fw-bold">Here are some of my social accounts.</h2>
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
                
                    <h2 className="fs-4 fw-bold">Have questions? Want to talk?</h2>
                    <p>I sort of check my emails a lot so feel free to send a message my way!</p>
                    <Button className="workButtons" href="mailto:albertzeap@gmail.com">Launch a polite email attack</Button>
                    
                </Col>

            </Row>
            
        </Container>
    );
}