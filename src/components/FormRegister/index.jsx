import React, { useState } from "react";
import PropTypes from "prop-types";
import { Col, Container, Form, Row } from "react-bootstrap";
import { ButtonClear, ButtonSend } from "../ButtonsVariants";

const FormRegister = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <Container className="bg-secondary pt-2 pt-lg-4">
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          // className="w-100"
        >
          <Row className="my-2 my-lg-3 pb-4 text-white text-center">
            <h2>Cadastro</h2>
          </Row>
          <Row className="input-form">
            <Form.Group as={Col} lg={12} controlId="validationCustom01">
              <Form.Control
                name="name"
                required
                type="text"
                placeholder="Nome"
                size="lg"
              />
              <Form.Control.Feedback type="invalid">
                Erro no nome
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="input-form">
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Control
                name="email"
                required
                type="email"
                placeholder="Email"
                size="lg"
              />
              <Form.Control.Feedback type="invalid">
                Email erro
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="input-form">
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Control
                name="phone"
                type="tel"
                placeholder="Telefone"
                size="lg"
              />
              <Form.Control.Feedback type="invalid">
                Erro telefone
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="input-form">
            <Form.Group as={Col} lg="8" controlId="validationCustom03">
              <Form.Control
                name="city"
                type="text"
                placeholder="Cidade"
                size="lg"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} lg={4} controlId="validationCustom04">
              <Form.Select
                aria-label="Default select example"
                name="state"
                type="text"
                placeholder="Estado"
                size="lg"
              >
                <option>UF</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          {/*
           * TODO: Alinhamento dos botões do form
           * TODO: Form à esquerda depois a partir do lg
           */}
          <Row className="mb-4 gap-4 flex-grow-0 justify-content-between">
            <Col className="align-align-items-center">
              <ButtonClear type="button" size="xl" className="my-5">
                Limpar
              </ButtonClear>

              <ButtonSend lg={6} variant="primary" type="submit">
                Enviar
              </ButtonSend>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

FormRegister.propTypes = {};

export default FormRegister;
