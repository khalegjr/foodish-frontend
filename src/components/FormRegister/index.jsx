import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { ButtonClear, ButtonSend } from "../ButtonsVariants";
import axios from "axios";
import "./style.scss";

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
      <Container className="bg-secondary form-container">
        <Form.Control.Feedback type="valid" style={{ display: show }}>
          {status.message}
        </Form.Control.Feedback>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <h2>Cadastro</h2>
          <Form.Group controlId="validationName">
            <Form.Control
              name="name"
              required
              type="text"
              placeholder="Nome"
              onChange={valueInput}
              className="input-form"
            />
            <Form.Control.Feedback type="invalid">
              {status.data.name || "O campo nome é requerido."}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationEmail">
            <Form.Control
              name="email"
              required
              type="email"
              placeholder="Email"
              onChange={valueInput}
              className="input-form"
            />
            <Form.Control.Feedback type="invalid">
              {status.data.email || "O campo email é requerido"}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationPhone" >
            <Form.Control
              name="phone"
              type="tel"
              placeholder="Telefone"
              onChange={valueInput}
              className="input-form"
            />
            <Form.Control.Feedback type="invalid">
              {status.data.phone | "Erro telefone"}
            </Form.Control.Feedback>
          </Form.Group>

          <div className="input-group">
            <Form.Group controlId="validationCity" >
              <Form.Control
                name="city"
                type="text"
                placeholder="Cidade"
                onChange={valueInput}
                className="input-form-city"
              />
            </Form.Group>

            <Form.Group controlId="validationState" >
              <Form.Select
                aria-label="Default select example"
                name="state"
                type="text"
                placeholder="Estado"
                className="input-form-uf"
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
          </div>

          <div className="buttons-container">
            <Button
              type="button"
              className="form-buttons clear"
              onClick={resetStateForm}
            >
              Limpar
            </Button>
            <Button variant="primary" className="form-buttons" type="submit">
              Enviar
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

FormRegister.propTypes = {};

export default FormRegister;
