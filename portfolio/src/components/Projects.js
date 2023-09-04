import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Badge from 'react-bootstrap/Badge';
import {AiFillGithub} from "react-icons/ai"
import { Link } from "react-router-dom";

import furnitureLanding from "../assets/furnitureLanding.png"
import githubTimelines from "../assets/githubTimelines.png"
import bobaSlice from "../assets/bobaSlice.png"
import contactManager from "../assets/contactManager.png"
import purrfectMeowdel from "../assets/purrfect.png"
import paezVisuals from "../assets/paezVisuals.png"
import studentGradebook from "../assets/studentGradebook.png"
import facebook from "../assets/facebook.png"
import productApi from "../assets/productApi.png"


const favoriteProjects = [
    {
        id: "1a",
        title: "Furniture Plus",
        subtitle: "A comprehensive e-commerce web application for buying and selling furniture products online.",
        liveLink: "https://furniture-hub.vercel.app",
        gitHubLink: "https://github.com/albertzeap/furniture-hub-ecommerce",
        image: furnitureLanding,
        techStack: ["React", "Redux", "JavaScript", "HTML", "CSS", "Bootstrap", "Supabase (Postgres)"]
    },
    {
        id: "2a",
        title: "Boba Slice",
        subtitle: "Full stack app for a food ordering system that allows users to choose between boba or pizza",
        liveLink: "",
        gitHubLink: "https://github.com/albertzeap/boba-slice",
        image: bobaSlice,
        techStack: ["Java", "Spring Boot", "MySQL", "React", "JavaScript", "CSS", "AWS"]
    },
    {
        id: "3a",
        title: "Contact Manager",
        subtitle: "A JavaFX application for managing contacts",
        liveLink: "",
        gitHubLink: "https://github.com/albertzeap/boba-slice",
        image: contactManager,
        techStack: ["Java", "JavaFX", "MySQL", "JDBC"]
    }
]

const otherProjects = [
    {
        id: "1b",
        title: "GitHub Timelines",
        subtitle: "Web application that allows employers to view a timeline view of a user's repository history.",
        liveLink: "https://timelines-ismael-barajas.vercel.app",
        gitHubLink: "https://github.com/Ismael-Barajas/Timelines",
        image: githubTimelines,
        techStack: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Vercel", "Github API"]
    },
    {
        id: "2b",
        title: "Purrfect Meowdel",
        subtitle: "A web application for creating blogs based off a client's Facebook cat page.",
        liveLink: "https://www.purrfectmeowdel.com",
        gitHubLink: "https://github.com/albertzeap/purrfect-meowdel",
        image: purrfectMeowdel,
        techStack: ["React", "JavaScript", "Bootstrap", "HTML", "CSS", "Vercel", "Sanity.io"]
    },
    {
        id: "3b",
        title: "Student Gradebook",
        subtitle: "Java console application that allows teacher's to keep track of classes and grades.",
        liveLink: "",
        gitHubLink: "https://github.com/albertzeap/JUMPlus/tree/master/Project3",
        image: studentGradebook,
        techStack: ["Java", "JDBC", "MySQL"]
    },
    {
        id: "4b",
        title: "Paez Visuals",
        subtitle: "Web application that serves as my videographer portfolio site.",
        liveLink: "https://paez-visuals.web.app",
        gitHubLink: "https://github.com/albertzeap/Paez-Visuals",
        image: paezVisuals,
        techStack: ["React", "JavaScript", "HTML", "CSS", "Netlify", "Bulma.css", "Email.js", "Framer Motion"]
    },
    {
        id: "5b",
        title: "Facebook Clone",
        subtitle: "Web application that mimics social media site, Facebook.",
        liveLink: "https://facebook-clone-5a055.web.app",
        gitHubLink: "https://github.com/albertzeap/Facebook-Clone",
        image: facebook,
        techStack: ["React", "JavaScript", "HTML", "CSS", "Firebase", "Material-UI", "React Context"]
    },
    {
        id: "6b",
        title: "Product REST API",
        subtitle: "A backend service that handles the ordering of products.",
        liveLink: "",
        gitHubLink: "https://github.com/albertzeap/Furniture-Hub-Backend",
        image: productApi,
        techStack: ["Java", "MySQL", "Spring Boot"]
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

                        {favoriteProjects.map((project) => (
                            <Card key={project.id} className="my-4" style={{width: "65vw"}}>
                                <Card.Header className="">
                                    <Card.Img src={project.image} alt="project screenshot" variant="top" className="py-3"/>
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
                                                <Badge className="projectBadge mx-2">{tech}</Badge>
                                            </Col>
                                        ))}
                                    
                                        </Row>
                                    </Container>
                                    <Container className="d-flex justify-content-center ">
                                        {project.liveLink !== "" ? (
                                            <a href={project.liveLink} target="_blank" rel="noreferrer" className="projectLink px-3">View Live</a>
                                        ):(
                                            <></>
                                        )}
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

                            {otherProjects.map((project) => (
                            <Col sm={6} md={6} lg={4} xl={4} xxl={4}>
                            <Card key={project.id} className="my-4">

                                <Card.Header className="">
                                    <Card.Img src={project.image} alt="project screenshot" variant="top" className="py-3" height={"250vh"}/>
                                </Card.Header>
                                <Card.Body className="text-center">
                               
                                    <Card.Title className="fw-bold py-3 fs-3 text-uppercase">
                                        {project.title}
                                    </Card.Title>
                                    <Card.Subtitle className="pb-2">
                                        <p>{project.subtitle}</p>
                                    </Card.Subtitle>
                                    <Container className="d-flex justify-content-center align-items-center pb-5" style={{height: "25vh"}}>
                                        <Row>

                                        {project.techStack.map((tech) => (
                                            <Col xs={6} sm={6} md={4}>
                                                <Badge className="projectBadge mx-1 my-1" >{tech}</Badge>
                                            </Col>
                                        ))}
                                        </Row>
                                    
                                    </Container>

                                    <Card.Footer>
                                        <Container className="d-flex justify-content-center align-items-end ">
                                            {project.liveLink !== "" ? (
                                                <a href={project.liveLink} target="_blank" rel="noreferrer" className="projectLink px-3">View Live</a>
                                                ):(
                                                    <></>
                                                    )}
                                            <Link className="projectLink">Read Case Study</Link>
                                        </Container>
                                        <Container className="d-flex justify-content-center align-items-center px-3 py-3">
                                            <a href={project.gitHubLink} target="_blank" rel="noreferrer" className="projectLink">
                                                <AiFillGithub size={"2em"}/>
                                            </a>
                                        </Container>

                                    </Card.Footer>
                                  
                                </Card.Body>
                            </Card>
                            </Col>
                        ))}

                    </Row>

                </Card>

            </Container>

        </Container>
    );
}