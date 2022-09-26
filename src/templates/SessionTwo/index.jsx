import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import imageRef from "../../assets/img/5c2e894fed6dddaf5b0998129bafd941.png";

const SessionTwo = () => {
  return (
    <>
      <Container as="section" className="w-100 bg-secondary" fluid>
        <Container className="py-4 py-lg-5">
          <Row className="pt-4">
            <Col sm={12} lg={6}>
              <Container className="text-white mt-2">
                <h2 className="mt-1 mb-5">Lorem ipsum sit</h2>

                <p className="m-0">
                  Amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="my-5">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </Container>
            </Col>
            <Col lg={6}>
              <Image
                sr
                className="pb-4 m-0"
                fluid
                src={imageRef}
                alt="Card image"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

SessionTwo.propTypes = {};

export default SessionTwo;
