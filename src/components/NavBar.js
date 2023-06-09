import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/mayurlogo2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/twitter3.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import "../assets/scss/navBar.scss";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const handleConnectClick = () => {
    const connectLink = document.getElementById("connect");

    connectLink.href = "https://localhost:3000/#connect";
  };

  return (
    <>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" style={{ height: "67px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/mayur-tanna-748a041b5"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={navIcon1} alt="logo" />{" "}
                </a>
              </div>
              <div className="social-icon">
                <a
                  href="https://twitter.com/MayurTanna15?t=pcLzN0s1D0bts01U98TOMQ&s=09"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={navIcon2} alt="logo" />
                </a>
              </div>
              <div className="social-icon">
                <a
                  href="https://instagram.com/mayur.tnna?igshid=ZGUzMzM3NWJiOQ=="
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={navIcon3} alt="logo" />
                </a>
              </div>
              <a href="#connect">
                <button className="vvd" onClick={handleConnectClick}>
                  <span> Let's connect</span>
                </button>
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
