import React, { useEffect, useState } from "react";
import "../assets/scss/introBanner.scss";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/astro3.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

const IntroBanner = () => {
  // logic for typing effect!
  const [loopNum, setLoopNum] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState(" ");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  const toRotate = ["Web Developer", " Web-designer", "UI/UX Designer"];
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = deleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (deleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!deleting && updatedText === fullText) {
      setDeleting(true);
      setDelta(period);
    } else if (deleting && updatedText === "") {
      setDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  const wavingHandEmoji = "\uD83D\uDC4B";

  return (
    <>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__bounce" : ""
                    }
                  >
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>
                      {`Hi I'm Mayur`}{" "}
                      <span className={isVisible ? " animate__shakeX " : ""}>
                        {wavingHandEmoji}
                      </span>
                    </h1>
                    <span className="wrap">{text}</span>
                    <p>
                      I am a skilled front-end developer with expertise in
                      ReactJS, NextJS, Firebase, and other related technologies.
                      With a passion for building responsive, high-performing
                      web applications, i bring a creative and innovative
                      approach to every project. With strong problem-solving
                      skills and attention to detail,i am committed to
                      delivering solutions that exceed expectations. i am
                      dedicated to staying up-to-date with the latest trends and
                      best practices in the industry and is always seeking new
                      opportunities to expand his skills and knowledge.
                    </p>
                    <a
                      href="https://github.com/MayurTnna"
                      target="_blank"
                      style={{ textDecoration: " none" }}
                    >
                      <button>
                        Let's connect
                        <ArrowRightCircle size={25} />
                      </button>
                    </a>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="header img" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default IntroBanner;
