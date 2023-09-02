import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import  Image from 'react-bootstrap/Image'



export const Experience = () => {
    return(
        <Container className="py-5 w-75">
            
            <Container>
                <h1 className="sectionHeader2 text-center text-uppercase fw-bold pt-3 pb-5">Where have i worked?</h1>
                <hr></hr>
            </Container>
            <Container className="py-5">

                <Container>

                <Row>
                    <Col>
                        <Container className="d-flex flex-column pb-5 w-50">
                            <Image src="https://cognixia.com/us/wp-content/uploads/2023/04/Cognixia-Logo_Ascendion-Co.png" />
                        </Container>
                    </Col>
                    <Col>
                        <Container>
                            <h1 className="fs-4 fw-bold py-1">Full Stack Java Developer @ Cognixia</h1>
                            <p className="py-1 text-muted">January 2023 - Present</p>
                            
                            <ul>
                                <li className="listItem py-2">Participated in a hyper-intense technical training program that gives top STEM talent from across the U.S. the equivalent of 12-18 months of industry experience.</li>
                                <li className="listItem py-2">Established decoupled backend service using Java/J2EE, Spring Boot REST APIs, Spring Security, JWT token APIs authentication, password encryption, ORM tools like Hibernate & JPA, and unit tests with Mockito & Junit Test Suite. </li>
                                <li className="listItem py-2">Developed front end with React.js and Bootstrap to consume Spring Boot REST API service.</li>
                            </ul>
                            
                        </Container>
                    </Col>
                </Row>
                </Container>
            </Container>
          
        </Container>
    );
}