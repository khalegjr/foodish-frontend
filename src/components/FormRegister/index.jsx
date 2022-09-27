import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { ButtonClear, ButtonSend } from "../ButtonsVariants";
import axios from "axios";

const FormRegister = ({ uf }) => {
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
  });

  const [status, setStatus] = useState({
    success: false,
    message: "",
    data: {},
  });

  // Setar os dados do form
  const [validated, setValidated] = useState(false);
  const [data, setData] = useState([]);

  // Receber os dados do form
  const valueInput = (e) =>
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });

  // Enviar os dados par o back-end
  const handleSubmit = async (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log("Deu ruim antes de ir");
    } else {
      event.preventDefault();
      console.log("eita");
      axios
        .post(process.env.REACT_APP_BACKAPI, dataForm)
        .then((response, dataForm) => {
          console.log(response.data);
          setStatus(response.data);
          setData(response.data);
        })
        .catch(function (error) {
          console.log("ERRO:", error);
        });

      console.log("Meu Status: ", status);
      console.log("Meu Data: ", data);
    }

    setValidated(true);
  };

  const clearForm = () => {
    setDataForm({
      name: "",
      email: "",
      phone: "",
      city: "",
      state: "",
    });
  };

  return (
    <>
      <Container className="bg-secondary pt-2 pt-lg-4">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
                onChange={valueInput}
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
                onChange={valueInput}
              />
              <Form.Control.Feedback type="invalid">
                {status.message || "Erro no email"}
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
                onChange={valueInput}
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
                onChange={valueInput}
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
                onChange={valueInput}
              >
                <option>UF</option>
                {uf.map((option) => (
                  <option key={option.id} value={option.sigla}>
                    {option.nome}
                  </option>
                ))}
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
              <Button
                type="button"
                size="xl"
                className="my-5"
                onClick={clearForm}
              >
                Limpar
              </Button>

              <Button lg={6} variant="primary" type="submit">
                Enviar
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

FormRegister.propTypes = {};

export default FormRegister;
