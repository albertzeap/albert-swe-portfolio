import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import  Image from 'react-bootstrap/Image'

import profile from "../assets/profile.jpg"

export const Projects = () => {
    return(
        <Container className="py-5">
            <Container className="py-5">
                <h1 className="sectionHeader1 text-center text-uppercase fw-bold pt-3 pb-5">What have i built?</h1>
                <hr></hr>
            </Container>
            <Container className="py-5 d-flex">
               
                        <Container className="d-flex justify-content-center">
                            <Image src={profile} className="w-50"/>
                        </Container>
                    
                        <Container>
                            <h1>Furniture Hub</h1>
                            <p className="py-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <p className="py-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book. It has survived not only five centuries, but
                            also the leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset
                            sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </Container>
                
            </Container>

        </Container>
    );
}