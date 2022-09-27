import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { ButtonClear, ButtonSend } from "../ButtonsVariants";
import axios from "axios";

const FormRegister = ({ uf }) => {
  const initialStateForm = {
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
  };

  const initialStateValidated = false;

  const initialStateStatus = {
    success: false,
    message: "",
    data: {},
  };

  // Dados do formulário
  const [dataForm, setDataForm] = useState(initialStateForm);

  // Controle da request
  const [controle, setControle] = useState(initialStateStatus);

  // Form já foi validado ou não
  const [validated, setValidated] = useState(initialStateValidated);

  // Status da request com mensagens de retorno
  const [status, setStatus] = useState(initialStateStatus);

  // Receber os dados do form
  const valueInput = (e) =>
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });

  // Recebe o retorno da request
  let dados;

  // Enviar os dados para o backend
  const handleSubmit = async (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();

      await axios
        .post(process.env.REACT_APP_BACKAPI, dataForm)
        .then((response) => {
          setControle(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
    setValidated(true);
  };

  console.log("Meus status fora da handle: ", status.data.email);
  console.log("controle antes: ", controle.message);
  const [show, setShow] = useState("none");

  useEffect(() => {
    setStatus(controle);
    if (!controle.success) {
      setShow("block");
    } else {
      setShow("none");
    }
  }, [controle]);

  const resetStateForm = () => {
    console.log("VOU RESETAR");
    setDataForm(initialStateForm);
    setControle(initialStateStatus);
    setValidated(initialStateValidated);
  };

  return (
    <>
      <div class="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          id="liveToast"
          class="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="toast-header">
            <img src="..." class="rounded me-2" alt="..." />
            <strong class="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div class="toast-body">Hello, world! This is a toast message.</div>
        </div>
      </div>

      <Container className="bg-secondary pt-2 pt-lg-4">
        <div className="text-white invalid-feedback" style={{ display: show }}>
          OPA, BÃO? {status.data.email}
        </div>
        <Form.Control.Feedback type="valid" style={{ display: show }}>
          {status.message}
        </Form.Control.Feedback>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="my-2 my-lg-3 pb-4 text-white text-center">
            <h2>Cadastro</h2>
          </Row>
          <Row className="input-form">
            <Form.Group as={Col} lg={12} controlId="validationName">
              <Form.Control
                name="name"
                required
                type="text"
                placeholder="Nome"
                size="lg"
                onChange={valueInput}
              />
              <Form.Control.Feedback type="invalid">
                {status.data.name || "O campo nome é requerido."}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="input-form">
            <Form.Group as={Col} md="12" controlId="validationEmail">
              <Form.Control
                name="email"
                required
                type="email"
                placeholder="Email"
                size="lg"
                onChange={valueInput}
              />
              <Form.Control.Feedback type="invalid">
                {status.data.email || "O campo email é requerido"}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="input-form">
            <Form.Group as={Col} md="12" controlId="validationPhone">
              <Form.Control
                name="phone"
                type="tel"
                placeholder="Telefone"
                size="lg"
                onChange={valueInput}
              />
              <Form.Control.Feedback type="invalid">
                {status.data.phone | "Erro telefone"}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="input-form">
            <Form.Group as={Col} lg="8" controlId="validationCity">
              <Form.Control
                name="city"
                type="text"
                placeholder="Cidade"
                size="lg"
                onChange={valueInput}
              />
            </Form.Group>

            <Form.Group as={Col} lg={4} controlId="validationState">
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
                Selecione um estado válido.
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
                onClick={resetStateForm}
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
