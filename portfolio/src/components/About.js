import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsChevronDoubleDown } from 'react-icons/bs';
import "../styles/about.css"

export const About = () => {
    return(
        <Container className="py-5 w-75">
          
                <h1 className="sectionHeader1 text-center fw-bold text-uppercase fs-1 pt-3 pb-5">So who am i?</h1>
                <hr></hr>
                <Container className="py-4">
                  
                    {/* <Container className="d-flex justify-content-center align-items-center w-100 h-50 py-5">
                        <Image src={picture} style={{width: "30%", height: "auto"}} rounded/>
                    </Container> */}
                       <Container >
                            <Row className="paragraphs pb-5 mb-5">
                                
                                <Col className="py-3">
                                    <h1 className="text-center fw-bold py-2">Bio</h1>
                                    <p className="py-1">My name is Albert Paez and I am a software engineer committed to a lifestyle of learning and building.</p>
                                    <p className="py-1">The three main reasons why I love programming/building is because 
                                        (1) I love learning from obstacles that arise when working on projects, 
                                        (2) I find purpose in creating applications for the sake of pure creativity or applications that help solve common problems and 
                                        (3) I enjoy building relationships with team members and working together to create software we're proud of.
                                    </p>
                                    <p className="py-1">As a California State University-Fullerton alumni, holding a Bachelor's of Science in Computer Science, I aim to hone my skills so that I can contribute greatly to the tech industry. Furthermore, I am a firm believer that anyone can achieve greatness as long they have the humility to learn.</p>
                                </Col>
                                <Col xs={1}></Col>
                                <Col className="py-3">
                                    <h1 className="text-center fw-bold py-2">Hobbies</h1>
                                    <p className="py-1">Naturally, as a lifelong learner I have picked up several hobbies throughout the years:</p>
                                    <p className="py-1"><strong>Drumming: </strong> this is one of my first major hobbies that I picked up in 6th grade. So far, I've been doing this one for about 12 years.</p>
                                    <p className="py-1"><strong>Videography: </strong> this is one that I picked up when I first started college. It has been really fun and I've actually developed it enough to film a couple weddings and other events.</p>
                                    <p className="py-1"><strong>Dancing: </strong>this is one that I got into during my junior year of college. I never thought I would get into something like this but I actually enjoyed the amount of freedom/creativity. Plus, it is an excellent way to face challenges and keep growing (dancing is hard!).</p>                                  
                                </Col>
                            </Row>
                            <Row className="pb-5">
                                <Container className="text-center">
                                    <p>Thanks for reading so far, now we get into the really fun stuff!</p>
                                    <BsChevronDoubleDown/>
                                </Container>
                            </Row>


                       </Container>
                     
                   
                </Container>
       
        </Container>
    )
}