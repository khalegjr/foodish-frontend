import React from "react";
import PropTypes from "prop-types";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./style.scss";

const SessionMain = () => {
  return (
    <>
      <Container className="principal-card" fluid>
        <h1 className="text-white">Teste o estilo de vida </h1>
        <h3 className="text-white ">
          H3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        </h3>
        <Button size="lg" variant="primary" className="lets-go-button">
          Vamos lá!
        </Button>
      </Container>
    </>
  );
};

SessionMain.propTypes = {};

export default SessionMain;
