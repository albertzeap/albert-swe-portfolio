import { useState } from "react";
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Carousel from 'react-bootstrap/Carousel';
export const Skills = () => {
    const [index, setIndex] = useState(0);
    

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };


    return (
        <Container className="py-5 w-75">
            
            <Container>
                <h1 className="sectionHeader2 text-center text-uppercase fw-bold pt-3 pb-5">What tech do i use?</h1>
                <hr></hr>
            </Container>
            <Container className="d-flex py-5" fluid>

               <Card className="border border-0 w-100" style={{backgroundColor: "#F7F7F7"}}>
                <Card.Body>
                    <Row className="text-center">
                        <Col>
                            <h1 className="fs-3 fw-bold">Frontend</h1>
                            <p>Some tools that I use to craft frontends</p>
                            <p>React.js</p>
                            <p>Redux</p>
                        </Col>
                        <Col>
                            <h1 className="fs-3 fw-bold">Backend</h1>
                            <p>Java</p>
                            <p>Java</p>
                            <p>Java</p>
                            <p>Java</p>
                            <p>Java</p>
                            <p>Java</p>
                            <p>Java</p>
                            <p>Java</p>
                            <p>Java</p>
                            <p>Java</p>
                            <p>Java</p>
                            <p>Java</p>
                        </Col>
                        <Col>
                            <h1 className="fs-3 fw-bold">Database</h1>
                        </Col>
                    </Row>

                </Card.Body>
               </Card>

            </Container>
          
        </Container>
    )
}