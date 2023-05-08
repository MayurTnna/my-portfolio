import React, { useState } from "react";
import { Col, Container } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

const Contacts = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };
  return (
    <>
      <section className="contact " id="contact">
        <Container>
          <Row>
            <Col md={6}>
              <img src={contactImg} alt="contact-image" />
            </Col>
            <Col md={6}>
              <h2>Get in Touch</h2>
              <form>
                <Row>
                  <Col sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.firstName}
                      placeholder="First Name"
                      onChange={(e) =>
                        onFormUpdate("firstName", e.target.value)
                      }
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    {" "}
                    <input
                      type="text"
                      value={formDetails.lastName}
                      placeholder="Last Name"
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    {" "}
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder="Email "
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    {" "}
                    <input
                      type="tel"
                      value={formDetails.phone}
                      placeholder="Phone number"
                      onChange={(e) =>
                        onFormUpdate("Phone number", e.target.value)
                      }
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <textarea
                      rows="6"
                      value={formDetails.message}
                      placeholder="Enter your message"
                      onChange={(e) => onFormUpdate("message ", e.target.value)}
                    />
                  </Col>
                  <Col>
                    <button type="submit">
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                  {status.message && (
                    <Col>
                      <p
                        className={
                          status.success === false ? "danger" : "success"
                        }
                      >
                        {status.message}
                      </p>
                    </Col>
                  )}
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contacts;
