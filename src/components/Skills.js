import React from "react";
import "../assets/scss/skills.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <section className="skills" id="skills">
        <Container>
          <Row>
            <Col>
              <div className="skill-bx">
                <TrackVisibility>
                  {({ isVisible }) => (
                    <div className={isVisible ? "animate__bounceOut" : ""}>
                      <h2>Skills</h2>
                    </div>
                  )}
                </TrackVisibility>
                <p>
                  Browse my skills section to discover my technical and
                  professional expertise in web development, programming
                  languages, and graphic design. From HTML and CSS to
                  JavaScript, Python, and Adobe Creative Suite, I have the
                  skills and experience to deliver exceptional results.
                </p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skill-slider"
                >
                  <div className="item">
                    <img src={meter1} alt="meter1" />
                    <h5>C</h5>
                  </div>
                  <div className="item">
                    <img src={meter1} alt="meter1" />
                    <h5>Java</h5>
                  </div>
                  <div className="item">
                    <img src={meter1} alt="meter1" />
                    <h5>HTML5 / CSS3 / SCSS</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="meter2" />
                    <h5>JavaScript</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="meter3" />
                    <h5>ReactJS</h5>
                  </div>
                  <div className="item">
                    <img src={meter1} alt="meter1" />
                    <h5>NextJS</h5>
                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
        <img
          src={colorSharp}
          className="background-image-left"
          alt="colorSharp"
        />
      </section>
    </>
  );
};

export default Skills;
