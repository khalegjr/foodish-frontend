import React from "react";
import PropTypes from "prop-types";
import { Button, Col, Container, Row } from "react-bootstrap";

const CardSession = () => {
  return (
    <>
      <Container className="m-4 mt-lg-1">
        <Row className="m-2 mt-lg-5 pt-lg-5">
          <Col sd={12} lg={7}>
            <h1
              className="text-white"
              // style={{
              //   maxWidth: "689px",
              // }}
            >
              Teste o estilo de vida
            </h1>
          </Col>
        </Row>

        <Row className="text-white py-2" sd={12} lg={7}>
          <Col sd={12} lg={6}>
            <h3>
              H3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            </h3>
          </Col>
        </Row>

        {/* TODO: Fix o background */}
        <Row className=" py-2 py-lg-5 ">
          <Container className="px-0 pb-lg-5 pt-lg-3 mt-lg-1 m-sm-0 p-sm-2">
            <Button size="lg" variant="primary" className="mb-lg-5">
              Vamos lá!
            </Button>
          </Container>
        </Row>
      </Container>
    </>
  );
};

CardSession.propTypes = {};

export default CardSession;
