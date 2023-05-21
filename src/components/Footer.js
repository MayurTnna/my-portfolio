import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Mailchimpform from "./Mailchimpform";
import logo from "../assets/img/mayurlogo2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/twitter3.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import "../assets/scss/footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <Mailchimpform />
            <Col sm={4}>
              <img src={logo} alt="logo" className="main-image" style={{ height :"67px"}}/>
            </Col>
            <Col sm={6} className="text-center mt-4 text-sm-end">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/mayur-tanna-748a041b5"
                  target="_blank"
                >
                  <img src={navIcon1} />
                </a>
                <a
                  href="https://twitter.com/MayurTanna15?t=pcLzN0s1D0bts01U98TOMQ&s=09"
                  target="_blank"
                >
                  <img className="text-danger" src={navIcon2} />
                </a>
                <a
                  href="https://instagram.com/mayur.tnna?igshid=ZGUzMzM3NWJiOQ=="
                  target="_blank"
                >
                  <img src={navIcon3}  />
                </a>
              </div>
              <p>Copyright 2023 , All rights reserved </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
