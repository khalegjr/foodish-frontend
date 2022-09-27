import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import FormRegister from "../../components/FormRegister";
import "./styles.scss";

const SessionThree = () => {
  return (
    <>
      <Container as="section" className="session-form w-100" fluid>
        <Container sd={12} lg={4} className="">
          <Row>
            <FormRegister />
          </Row>
        </Container>
      </Container>
    </>
  );
};

SessionThree.propTypes = {};

export default SessionThree;
