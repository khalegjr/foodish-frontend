import React from "react";
import PropTypes from "prop-types";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./style.scss";

const SessionMain = () => {
  return (
    <>
      <Container className="mt-lg-1 principal-card">
        <Row className="m-2 mt-lg-5 pt-lg-5">
          <h1
            className="text-white"
            // style={{
            //   maxWidth: "689px",
            // }}
          >
            Teste o estilo de vida
          </h1>
        </Row>

        <Row className="text-white py-2" sd={12} lg={7}>
          <h3>
            H3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          </h3>
        </Row>

        {/* TODO: Fix o background */}
        <Row className=" py-2 py-lg-5 ">
          <Container className="px-0 pb-lg-1 pt-lg-3 mt-lg-1 m-sm-0 p-sm-2">
            <Button size="lg" variant="primary" className="mb-lg-5">
              Vamos lá!
            </Button>
          </Container>
        </Row>
      </Container>
    </>
  );
};

SessionMain.propTypes = {};

export default SessionMain;
