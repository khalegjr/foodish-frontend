import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import imageRef from "../../assets/img/5c2e894fed6dddaf5b0998129bafd941.png";

const SessionTwo = () => {
  return (
    <>
      <section class="sessao3">
        <Container>
          <Row>
            <Col sm={6}>
              <Container>
                <h2
                  style={{
                    /* UI Properties */
                    textAlign: "left",
                    font: "normal normal bold 48px/96px Poppins",
                    letterSpacing: "0px",
                    color: "#FFFFFF",
                    opacity: "1",
                  }}
                >
                  Lorem ipsum sit
                </h2>

                <p
                  style={{
                    textAlign: "left",
                    font: "normal normal normal 22px/33px Poppins",
                    letterSpacing: "0px",
                    color: "#FFFFFF",
                    opacity: "1",
                  }}
                >
                  Amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <p
                  style={{
                    textAlign: "left",
                    font: "normal normal normal 22px/33px Poppins",
                    letterSpacing: "0px",
                    color: "#FFFFFF",
                    opacity: "1",
                  }}
                >
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </Container>
            </Col>
            <Col sm={6}>
              <Card className="bg-dark text-white p-0 m-0">
                <Card.Img
                  src={imageRef}
                  alt="Card image"
                  style={{
                    width: "650px",
                    height: "384px",
                    /* UI Properties */
                    opacity: "1",
                    margin: 0,
                    padding: 0,
                  }}
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

SessionTwo.propTypes = {};

export default SessionTwo;
