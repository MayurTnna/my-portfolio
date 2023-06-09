import React from "react";
import "../assets/scss/projects.scss";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";

import {
  projects_name,
  projects_name1,
  projects_name2,
} from "../assets/projectsName";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Projects = () => {
  return (
    <>
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__bounceOut" : ""}>
                    <h2>Projects</h2>
                  </div>
                )}
              </TrackVisibility>
              <p>
                Explore my portfolio of innovative projects that showcase my
                design skills and technical expertise in web development and
                graphic design. From HTML and SCSS designs to social media
                single-page web apps, each project reflects my passion for
                creativity and innovation.
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className=" nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">
                      <TrackVisibility>
                        {({ isVisible }) => (
                          <div
                            className={
                              isVisible
                                ? "animate__animated animate__bounce"
                                : ""
                            }
                          >
                            <span>&#x1F680;</span>
                          </div>
                        )}
                      </TrackVisibility>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">
                      {" "}
                      <TrackVisibility>
                        {({ isVisible }) => (
                          <div
                            className={
                              isVisible
                                ? "animate__animated animate__shakeY"
                                : ""
                            }
                          >
                            <span>&#x26A1;</span>
                          </div>
                        )}
                      </TrackVisibility>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">
                      {" "}
                      <TrackVisibility>
                        {({ isVisible }) => (
                          <div
                            className={
                              isVisible
                                ? "animate__animated animate__zoomInUp"
                                : ""
                            }
                          >
                            <span>&#x1F60E;</span>
                          </div>
                        )}
                      </TrackVisibility>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects_name.map((project, index) => {
                        console.log(project);
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      {projects_name1.map((project, index) => {
                        console.log(project);
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>
                      {projects_name2.map((project, index) => {
                        console.log(project);
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <Row>
                      {projects_name2.map((project, index) => {
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
        <img
          src={colorSharp2}
          alt="hbfdhb"
          className="background-image-right"
        />
      </section>
    </>
  );
};

export default Projects;
