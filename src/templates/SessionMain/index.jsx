import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import CardSession from "./Card";

import "./style.scss";

const SessionMain = () => {
  return (
    <>
      <Container as="main" className="sessao1" fluid>
        <CardSession />
      </Container>
    </>
  );
};

SessionMain.propTypes = {};

export default SessionMain;
