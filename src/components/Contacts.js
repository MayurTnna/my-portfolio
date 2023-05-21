import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "../assets/scss/contact.scss";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { fireDb } from "../firebase/firebase";
import { ref, push } from "firebase/database";

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
// basicallly used for clearing out message after 3s!!! 
  useEffect(() => {
    if (status.message) {
      const timeout = setTimeout(() => {
        setStatus({});
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [status]);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("sending");

    try {
      await push(ref(fireDb, "contacts"), formDetails);
      setButtonText("Send");
      setFormDetails(formInitialDetails);
      setStatus({ success: true, message: "Message sent successfully" });
    } catch (error) {
      console.error(error);
      setButtonText("Send");
      setStatus({ success: false, message: "Message not sent" });
    }
  };

  return (
    <>
      <section className="contact" id="connect">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img src={contactImg} alt="contact" />
            </Col>
            <Col md={6}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__bounceOut" : ""}>
                    <h2>Get in Touch</h2>
                  </div>
                )}
              </TrackVisibility>
              <form onSubmit={handleSubmit}>
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
                    <input
                      type="text"
                      value={formDetails.lastName}
                      placeholder="Last Name"
                      onChange={(e) =>
                        onFormUpdate("lastName", e.target.value)
                      }
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder="Email"
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      type="tel"
                      value={formDetails.phone}
                      placeholder="Phone number"
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                    />
                  </Col>
                  <Col sm={12} className="px-1">
                    <textarea
                      rows="6"
                      value={formDetails.message}
                      placeholder="Enter your message"
                      onChange={(e) =>
                        onFormUpdate("message", e.target.value)
                      }
                    />
                  </Col>
                  <Col sm={12}>
                    <button type="submit">
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                  {status.message && (
                    <Col sm={12}>
                      <p
                        className={`${
                          status.success === false ? "danger" : "success"
                        }`}
                        style={{ fontWeight: "800" }}
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
