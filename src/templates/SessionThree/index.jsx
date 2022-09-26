import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import FormRegister from "../../components/FormRegister";

const SessionThree = () => {
  return (
    <>
      <section class="sessao4">
        <Container>
          <Row>
            <Col sm={4}>
              <Container>
                <FormRegister />
              </Container>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

SessionThree.propTypes = {};

export default SessionThree;
