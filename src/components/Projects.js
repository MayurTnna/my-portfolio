import React from "react";
import "../assets/scss/projects.scss";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";


const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];
  return (
    <>
      <section className="project" id="project">
        <Container>
          <Row>
            <Col>
              <h2>Projects</h2>
              <p>
                The quick brown fox jumped over the lazy dog, who didn't seem to
                care one bit.
                <br /> After a long day at work, she likes to unwind with a good
                book and a cup of tea.
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className=" nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">option 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">option 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">option 3</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        console.log(project);
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      {projects.map((project, index) => {
                        console.log(project);
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>
                      {projects.map((project, index) => {
                        console.log(project);
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
        <img src={colorSharp2} className="background-image-right" />
      </section>
    </>
  );
};

export default Projects;
