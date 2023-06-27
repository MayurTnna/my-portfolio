import React from "react";
import Col from "react-bootstrap/esm/Col";
import "../assets/scss/projectCard.scss"

const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <>
      <Col sm={6} md={4}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt=" nfkjfdj8685" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span className="desc-text">{description}</span>
          </div>
        </div>
      </Col>
    </>
  );
};

export default ProjectCard;
