import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import CardSession from "./Card";

const SessionMain = () => {
  return (
    <>
      <main class="sessao1">
        <CardSession />
      </main>
    </>
  );
};

SessionMain.propTypes = {};

export default SessionMain;
