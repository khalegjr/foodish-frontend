import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import facebook from "../../assets/img/facebook.svg";
import instagram from "../../assets/img/instagram.svg";

const Footer = () => {
  return (
    <>
      <Container
        fluid
        as="footer"
        className="footer flex-column justify-content-center align-items-center"
      >
        <Row md={12}>
          <Col>
            <h4
              style={{
                /* UI Properties */
                textAlign: "left",
                font: "normal normal  22px Poppins",
                letterSpacing: "0px",
                color: "#FFFFFF",
              }}
            >
              foodish 2021
            </h4>
          </Col>
        </Row>

        <Row md={12}>
          <Col>
            <img src={facebook} alt="página no facebook" className="mx-2" />

            <img src={instagram} alt="página no instagram" className="mx-2" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
