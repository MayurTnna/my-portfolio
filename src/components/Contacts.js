import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "../assets/scss/contact.scss";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("sending");
    const response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json ; charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = response.json();
    console.log(result);
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: "Message sent successfully" });
    } else {
      setStatus({ success: false, message: "Message not sent " });
    }
  };

  return (
    <>
      <section className="contact " id="connect">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img src={contactImg} alt="contact" />
            </Col>
            <Col md={6}>
              <h2>Get in Touch</h2>
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
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <textarea
                      rows="6"
                      value={formDetails.message}
                      placeholder="Enter your message"
                      onChange={(e) => onFormUpdate("message", e.target.value)}
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

// Yes, that's correct. The first value passed to the onFormUpdate function is the property in the formDetails state object that we want to update, and the second value is the new value that we want to set for that property.

// In the Contacts component, we have initialized the formDetails state object with the initial values of an empty string for all the form fields. When the user types something into any of the form fields, we call the onFormUpdate function with the field name (e.g. "firstName", "lastName", "email", etc.) as the first argument, and the new value of the field as the second argument.

// The onFormUpdate function then updates the formDetails state object with the new value for the corresponding field. This causes the value attribute of the corresponding input or textarea element to be updated with the new value from the formDetails state object.
