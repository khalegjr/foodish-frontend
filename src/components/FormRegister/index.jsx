import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Col, Form, Row } from "react-bootstrap";

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
      <Form
        style={{
          /* UI Properties */
          width: "539px",
          height: "720px",
          background: "#000000 0% 0% no-repeat padding-box",
          opacity: "1",
          textAlign: "center",
        }}
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Row className="mb-3">
          <h2
            style={{
              textAlign: "center",
              font: "normal normal bold 48px/96px Poppins",
              letterSpacing: " 0px",
              color: "#FFFFFF",
              opacity: "1",
            }}
          >
            Cadastro
          </h2>
        </Row>
        <Row className="mb-4">
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Control
              name="name"
              required
              type="text"
              placeholder="Nome"
              defaultValue="Nome"
              size="lg"
              style={{
                width: "463px",
                height: "77px",
                /* UI Properties */
                background: "#FFFFFF 0% 0% no-repeat padding-box",
                border: "1px solid #707070",
                borderRadius: "4px",
                marginLeft: "31px",
              }}
            />
            <Form.Control.Feedback type="invalid">
              Erro no nome
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-4">
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Control
              name="email"
              required
              type="email"
              placeholder="Email"
              defaultValue="Email"
              size="lg"
              style={{
                width: "463px",
                height: "77px",
                /* UI Properties */
                background: "#FFFFFF 0% 0% no-repeat padding-box",
                border: "1px solid #707070",
                borderRadius: "4px",
                marginLeft: "31px",
              }}
            />
            <Form.Control.Feedback type="invalid">
              Email erro
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-4">
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Control
              name="phone"
              type="tel"
              placeholder="Telefone"
              defaultValue="Telefone"
              size="lg"
              style={{
                width: "463px",
                height: "77px",
                /* UI Properties */
                background: "#FFFFFF 0% 0% no-repeat padding-box",
                border: "1px solid #707070",
                borderRadius: "4px",
                marginLeft: "31px",
              }}
            />
            <Form.Control.Feedback type="invalid">
              Erro telefone
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-4">
          <Form.Group as={Col} md="8" controlId="validationCustom03">
            <Form.Control
              name="city"
              type="text"
              placeholder="Cidade"
              defaultValue="Cidade"
              size="lg"
              style={{
                width: "286px",
                height: "77px",
                /* UI Properties */
                background: "#FFFFFF 0% 0% no-repeat padding-box",
                border: "1px solid #707070",
                borderRadius: "4px",
                marginLeft: "31px",
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Select
              aria-label="Default select example"
              name="state"
              type="text"
              placeholder="Estado"
              defaultValue="Estado"
              size="lg"
              style={{
                width: "128px",
                height: "77px",
                /* UI Properties */
                background: "#FFFFFF 0% 0% no-repeat padding-box",
                border: "1px solid #707070",
                borderRadius: "4px",
              }}
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

        <Row className="mb-4 gap-4">
          <Button
            type="submit"
            style={{
              width: "181px",
              height: "73px",
              /* UI Properties */
              border: "1px solid #FFFFFF",
              background: "rgba(0 0 0 / .5)",
              borderRadius: "4px",
              textAlign: "center",
              font: "normal normal 300 32px/48px Poppins",
              letterSpacing: "0px",
              color: "#FFFFFF",
              marginLeft: "36px",
            }}
          >
            Limpar
          </Button>

          <Button
            type="submit"
            style={{
              width: "166px",
              height: "73px",
              /* UI Properties */
              background: "#5B6ED6 0% 0% no-repeat padding-box",
              borderRadius: "4px",
              textAlign: "center",
              font: "normal normal 300 32px/48px Poppins",
              letterSpacing: "0px",
              color: "#FFFFFF",
              marginLeft: "116px",
            }}
          >
            Enviar
          </Button>
        </Row>
      </Form>
    </>
  );
};

FormRegister.propTypes = {};

export default FormRegister;
