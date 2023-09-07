import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import  Image from 'react-bootstrap/Image'
import {motion} from 'framer-motion'
import { HomeProps } from "../page";



export const Experience: React.FC<HomeProps> = () => {
    return(
        <Container className="py-5 w-75">
            
            <Container>
                <h2 className="sectionHeader2 text-center text-uppercase fw-bold pt-3 pb-5 fs-1">Where have i worked?👨‍💻</h2>
                <hr></hr>
            </Container>
            <Container className="py-5">
                <motion.div
                    initial={{opacity: 0, y: -75}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{delay:0.25, duration: 0.5}}
                >
                    <Container>

                    <Row>
                        {/* <Col>
                            <Container className="d-flex flex-column pb-5 w-50">
                                <Image src="https://cognixia.com/us/wp-content/uploads/2023/04/Cognixia-Logo_Ascendion-Co.png" alt="cognixia logo" width={"100vw"} height={"50vh"} />
                            </Container>
                        </Col> */}
                        <Col>
                            <Container>
                                <h3 className="fs-4 fw-bold py-1">Full Stack Java Developer @ Cognixia</h3>
                                <p className="py-1 text-muted">January 2023 - Present</p>
                                
                                <ul>
                                    <li className="listItem py-2">Participated in a hyper-intense technical training program that gives STEM talent from across the U.S. the equivalent of 12-18 months of industry experience.</li>
                                    <li className="listItem py-2">Established decoupled backend service using Java/J2EE, Spring Boot REST APIs, Spring Security, JWT token APIs authentication, password encryption, ORM tools like Hibernate & JPA, and unit tests with Mockito & Junit Test Suite. </li>
                                    <li className="listItem py-2">Developed front end with React.js and Bootstrap to consume Spring Boot REST API service.</li>
                                </ul>
                                
                            </Container>
                        </Col>
                    </Row>
                    </Container>
                </motion.div>
            </Container>
          
        </Container>
    );
}