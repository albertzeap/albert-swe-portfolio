import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Badge from 'react-bootstrap/Badge';
import Carousel from 'react-bootstrap/Carousel';
import  Image from 'react-bootstrap/Image'
import {AiFillGithub} from "react-icons/ai"
import { Link } from "react-router-dom";

import furnitureLanding from "../assets/furnitureLanding.png"


const favoriteProjects = [
    {
        id: "1",
        title: "Furniture Plus",
        subtitle: "A comprehensive e-commerce web application for buying and selling furniture products online.",
        liveLink: "https://furniture-hub.vercel.app",
        gitHubLink: "https://github.com/albertzeap/furniture-hub-ecommerce",
        techStack: [
            {
                name: "React"
            },
            {
                name: "Redux"
            },
            {
                name: "JavaScript"
            },
            {
                name: "HTML"
            },
            {
                name: "CSS"
            },
            {
                name: "Bootstrap"
            },
            {
                name: "Supabase (Postgres)"
            },
        ]
    }
]

const otherProjects = [
    {
        id: "1",
        title: "GitHub Timelines",
        subtitle: "Web application that allows employers to view a timeline view of a user's repository history.",
        liveLink: "https://timelines-ismael-barajas.vercel.app",
        gitHubLink: "https://github.com/Ismael-Barajas/Timelines",
        techStack: [
            {
                name: "React"
            },
            {
                name: "Next.js"
            },
            {
                name: "JavaScript"
            },
            {
                name: "HTML"
            },
            {
                name: "CSS"
            },
            {
                name: "Vercel"
            },
            {
                name: "Github API"
            },
        ]
    },
    {
        id: "1",
        title: "GitHub Timelines",
        subtitle: "Web application that allows employers to view a timeline view of a user's repository history.",
        liveLink: "https://timelines-ismael-barajas.vercel.app",
        gitHubLink: "https://github.com/Ismael-Barajas/Timelines",
        techStack: [
            {
                name: "React"
            },
            {
                name: "Next.js"
            },
            {
                name: "JavaScript"
            },
            {
                name: "HTML"
            },
            {
                name: "CSS"
            },
            {
                name: "Vercel"
            },
            {
                name: "Github API"
            },
        ]
    },
    {
        id: "1",
        title: "GitHub Timelines",
        subtitle: "Web application that allows employers to view a timeline view of a user's repository history.",
        liveLink: "https://timelines-ismael-barajas.vercel.app",
        gitHubLink: "https://github.com/Ismael-Barajas/Timelines",
        techStack: [
            {
                name: "React"
            },
            {
                name: "Next.js"
            },
            {
                name: "JavaScript"
            },
            {
                name: "HTML"
            },
            {
                name: "CSS"
            },
            {
                name: "Vercel"
            },
            {
                name: "Github API"
            },
        ]
    }
]

export const Projects = () => {
    return(
        <Container className="py-5">
            <Container className="py-5">
                <h1 className="sectionHeader1 text-center text-uppercase fw-bold pt-3 pb-5">What have i built?</h1>
                <hr></hr>
            </Container>
            <Container className="py-5">
                

                <h1 className="fw-bold pb-5 text-center">Here are some of my favorite projects.</h1>
                
                <Row>
                    <Col className="d-flex flex-column align-items-center">

                        {/* <Card className="my-4" style={{width: "65vw"}}>
                            <Card.Header className="">
                                <Card.Img src={furnitureLanding} variant="top" className="py-3"/>
                            </Card.Header>
                            <Card.Body className="text-center">
                                <Card.Title className="fw-bold py-3 fs-1 text-uppercase">
                                    Furniture Plus
                                </Card.Title>
                                <Card.Subtitle className="pb-2">
                                    <p> A comprehensive e-commerce web application for buying and selling furniture products online. </p>
                                </Card.Subtitle>
                                <Container className="d-flex justify-content-center pb-5">
                                    <Badge className="projectBadge mx-2">React</Badge>
                                    <Badge className="projectBadge mx-2">Redux</Badge>
                                    <Badge className="projectBadge mx-2">JavaScript</Badge>
                                    <Badge className="projectBadge mx-2">HTML</Badge>
                                    <Badge className="projectBadge mx-2">CSS</Badge>
                                    <Badge className="projectBadge mx-2">Bootstrap</Badge>
                                    <Badge className="projectBadge mx-2">Supabase (Postgres)</Badge>

                                </Container>
                                <Container className="d-flex justify-content-center ">
                                    <a href="https://furniture-hub.vercel.app" target="_blank" rel="noreferrer" className="projectLink px-3">View Live</a>
                                    <Link className="projectLink">Read Case Study</Link>
                                </Container>
                                <Container className="d-flex justify-content-end align-items-center px-3">
                                    <a href="https://github.com/albertzeap/furniture-hub-ecommerce" target="_blank" rel="noreferrer" className="projectLink">
                                        <AiFillGithub size={"2em"}/>
                                    </a>
                                </Container>
                            </Card.Body>
                        </Card> */}

                        {favoriteProjects.map((project) => (
                            <Card key={project.id} className="my-4" style={{width: "65vw"}}>
                                <Card.Header className="">
                                    <Card.Img src={furnitureLanding} variant="top" className="py-3"/>
                                </Card.Header>
                                <Card.Body className="text-center">
                                    <Card.Title className="fw-bold py-3 fs-1 text-uppercase">
                                        {project.title}
                                    </Card.Title>
                                    <Card.Subtitle className="pb-2">
                                        <p>{project.subtitle}</p>
                                    </Card.Subtitle>
                                    <Container className="d-flex justify-content-center pb-5">
                                        <Row>
                                        {project.techStack.map((tech) => (
                                            <Col>
                                            <Badge className="projectBadge mx-2">{tech.name}</Badge>
                                            </Col>
                                        ))}
                                    
                                        </Row>
                                    </Container>
                                    <Container className="d-flex justify-content-center ">
                                        <a href={project.liveLink} target="_blank" rel="noreferrer" className="projectLink px-3">View Live</a>
                                        <Link className="projectLink">Read Case Study</Link>
                                    </Container>
                                    <Container className="d-flex justify-content-end align-items-center px-3">
                                        <a href={project.gitHubLink} target="_blank" rel="noreferrer" className="projectLink">
                                            <AiFillGithub size={"2em"}/>
                                        </a>
                                    </Container>
                                </Card.Body>
                            </Card>
                        ))}

                        
                    </Col>
                </Row>

                <h1 className="fw-bold py-5">Now here are some other fun projects.</h1>

                <Card className="py-3 px-4">

                    <Row>
                            {/* <Col>
                                <Card className="my-4">
                                    <Card.Header className="">
                                        <Card.Img src={furnitureLanding} variant="top" className="py-3"/>
                                    </Card.Header>
                                    <Card.Body className="text-center">
                                        <Card.Title className="fw-bold py-3 fs-3 text-uppercase">
                                            Furniture Plus
                                        </Card.Title>
                                        <p>A comprehensive e-commerce web application for buying and selling furniture products online.. </p>
                                    </Card.Body>
                                </Card>

                            </Col>
                            <Col>
                                <Card className="my-4">
                                    <Card.Header className="">
                                        <Card.Img src={furnitureLanding} variant="top" className="py-3"/>
                                    </Card.Header>
                                    <Card.Body className="text-center">
                                        <Card.Title className="fw-bold py-3 fs-3 text-uppercase">
                                            Furniture Plus
                                        </Card.Title>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    </Card.Body>
                                </Card>

                            </Col>
                            <Col>
                                <Card className="my-4">
                                    <Card.Header className="">
                                        <Card.Img src={furnitureLanding} variant="top" className="py-3"/>
                                    </Card.Header>
                                    <Card.Body className="text-center">
                                        <Card.Title className="fw-bold py-3 fs-3 text-uppercase">
                                            Furniture Plus
                                        </Card.Title>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    </Card.Body>
                                </Card>

                            </Col> */}



                            {otherProjects.map((project) => (
                            <Col>
                            <Card key={project.id} className="my-4">
                                <Card.Header className="">
                                    <Card.Img src={furnitureLanding} variant="top" className="py-3"/>
                                </Card.Header>
                                <Card.Body className="text-center">
                                    <Card.Title className="fw-bold py-3 fs-3 text-uppercase">
                                        {project.title}
                                    </Card.Title>
                                    <Card.Subtitle className="pb-2">
                                        <p>{project.subtitle}</p>
                                    </Card.Subtitle>
                                    <Container className="d-flex justify-content-center pb-5">
                                        <Row>

                                        {project.techStack.map((tech) => (
                                            <Col>
                                                <Badge className="projectBadge mx-2">{tech.name}</Badge>
                                            </Col>
                                        ))}
                                        </Row>
                                    
                                    </Container>
                                    <Container className="d-flex justify-content-center ">
                                        <a href={project.liveLink} target="_blank" rel="noreferrer" className="projectLink px-3">View Live</a>
                                        <Link className="projectLink">Read Case Study</Link>
                                    </Container>
                                    <Container className="d-flex justify-content-end align-items-center px-3">
                                        <a href={project.gitHubLink} target="_blank" rel="noreferrer" className="projectLink">
                                            <AiFillGithub size={"2em"}/>
                                        </a>
                                    </Container>
                                </Card.Body>
                            </Card>
                            </Col>
                        ))}

                    </Row>

</Card>




{/* <Row>

                        <Col xs={8}>
                        <Container className="d-flex justify-content-center align-content-center">
                            <Image src={profile} className="w-50"/>
                        </Container>
                        </Col>
                        <Col>
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
                        </Col>
                
                </Row> */}
            </Container>

        </Container>
    );
}