import React from "react";
import PropTypes from "prop-types";
import { Button, Container, Row } from "react-bootstrap";

const CardSession = () => {
  return (
    <>
      <Container>
        <Row
          style={{
            /* Layout Properties */

            // height: "231px",
            /* UI Properties */
            textAlign: "left",
          }}
        >
          <h1
            style={{
              marginTop: "117px",
              maxWidth: "689px",
              font: "normal normal bold 96px/96px Poppins",
              letterSpacing: "0px",
              color: "#FFFFFF",
              opacity: "1",
              paddingTop: "24px",
            }}
          >
            Teste o estilo de vida
          </h1>
        </Row>

        <Row
          style={{
            width: "539px",
            textAlign: "left",
            font: "normal normal 300 32px/48px Poppins",
            letterSpacing: "0px",
            color: "#FFFFFF",
            opacity: "1",
            marginTop: "53px",
          }}
        >
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </h3>
        </Row>

        <Row className="mt-5">
          <Container>
            <Button variant="primary" size="lg">
              Vamos lá!
            </Button>
            {" Olá"}
          </Container>
        </Row>
      </Container>
    </>
  );
};

CardSession.propTypes = {};

export default CardSession;
