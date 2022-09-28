import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import FormRegister from "../../components/FormRegister";
import "./styles.scss";

const FormSection = ({ uf }) => {
  return (
    <>
      <Container as="section" className="form-session-container" fluid>
        <FormRegister uf={uf} />
      </Container>
    </>
  );
};

FormSection.propTypes = {};

export default FormSection;
