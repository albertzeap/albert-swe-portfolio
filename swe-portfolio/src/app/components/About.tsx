import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BsLinkedin, BsGithub} from 'react-icons/bs'


// import "../styles/about.css"
// import Image from "react-bootstrap/esm/Image";
// import profile from "../assets/profile.jpg"



export const About = () => {
    return(
        <Container className="py-5 w-75" fluid>
          
                <h2 className="sectionHeader1 text-center fw-bold text-uppercase fs-1 pt-3 pb-5">So who am i?</h2>
                <hr></hr>
              
                       <Container fluid>
                            {/* <Container className="d-flex justify-content-center pt-4">
                                <Image  src={profile} rounded/>
                            </Container> */}
                            <Row className="paragraphs pb-4 mb-5 py-4">
                                
                                <Col className="aboutParagraph py-3 gx-5">
                                    <h3 className="text-center fw-bold py-2">Bio.</h3>
                                    <p className="py-1">My name is Albert Paez and I am a software engineer committed to a lifestyle of learning and building.</p>
                                    <p className="py-1"><strong>Why I love development: </strong>
                                        <strong className="sectionHeader1">(1)</strong> I love learning from obstacles that arise when working on projects, 
                                        <strong className="sectionHeader1">(2)</strong> I find purpose in creating applications for the sake of pure creativity or applications that help solve common problems and 
                                        <strong className="sectionHeader1">(3)</strong> I enjoy building relationships with team members and working together to create software we're proud of.
                                    </p>
                                    <p className="py-1">As a California State University-Fullerton alumni, holding a Bachelor's of Science in Computer Science, I aim to hone my skills so that I can contribute greatly to the tech industry. Furthermore, I am a firm believer that anyone can achieve greatness as long they have the humility to learn.</p>
                                </Col>
                          
                                <Col className="aboutParagraph py-3 gx-5">
                                    <h3 className="text-center fw-bold py-2">Tech.</h3>
                                    <p className="py-1">Over the years, I have picked up several languages and frameworks. Here are a couple of them</p>
                                    <p className="py-1"><strong>Front-End Technologies: </strong>I have a lot of fun with <strong className="sectionHeader1">React.js, JavaScript, HTML, CSS, Bootstrap, and Bulma.css</strong> for creating intuitive and user-friendly interfaces. Whether it be the next Facebook or a simple dad joke website, I simply enjoy the process.</p>
                                    <p className="py-1"><strong>Back-End Technologies: </strong>I get really passionate using <strong className="sectionHeader1">Java, Spring Boot, MySQL, MongoDB, and Supabase</strong>. Crafting a robust backend service is my jam. I enjoy the level of detail required and the overall big picture of how the data can be consumed by a client.</p>
                                    <p className="py-1"><strong>Other Technologies: </strong>Git, AWS, C++</p>

                                   
                                </Col>
                            </Row>
                            <Row className="pb-5">
                                <Container className="text-center">
                                    <p className="fw-bold">Get to know me more by checking here!</p>
                                    <Container className="d-flex justify-content-center">
                                        <a href="https://github.com/albertzeap" target="_blank" rel="noreferrer" className="projectLink" title="Visit GitHub Profile. Will open new tab">
                                            <BsGithub className="mx-4" size={"2em"}/>
                                            <span className="visually-hidden">GitHub Profile</span>
                                        </a>
                                        <a href="https://www.linkedin.com/in/albert-paez-30501a1b5" target="_blank" rel="noreferrer" className="projectLink" title="Visit LinkedIn Profile. Will open new tab">
                                            <BsLinkedin className="mx-4" size={"2em"}/>
                                            <span className="visually-hidden">LinkedIn Profile</span>
                                        </a>
                                    </Container>
                                </Container>
                            </Row>


                       </Container>
                     
                   
                {/* </Container> */}
       
        </Container>
    )
}