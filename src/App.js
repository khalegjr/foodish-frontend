import { Container, Row, Col, Button, Form } from "react-bootstrap";

import facebook from "./assets/img/facebook.svg";
import instagram from "./assets/img/instagram.svg";
import { useState } from "react";
import Header from "./components/Header";
import SessionMain from "./templates/SessionMain";
import SessionOne from "./templates/SessionOne";
import SessionTwo from "./templates/SessionTwo";
import SessionThree from "./templates/SessionThree";

function App() {
  return (
    <div className="App">
      <Header />
      {/* TODO: verificar alinhamento e as fontes */}

      <SessionMain />

      <SessionOne />

      <SessionTwo />

      <SessionThree />

      <footer bg="dark" class="footer">
        <Container fluid className="align-items-center" md={12}>
          <Row>
            <Col className="mx-6">
              <Row>
                <h4
                  style={{
                    /* UI Properties */
                    textAlign: "left",
                    font: "normal normal 300 22px/96px Poppins",
                    letterSpacing: "0px",
                    color: "#FFFFFF",
                  }}
                >
                  foodish 2021
                </h4>
              </Row>

              <Row>
                <Col>
                  <img
                    src={facebook}
                    alt="página no facebook"
                    className="mx-5"
                  />

                  <img src={instagram} alt="página no instagram" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;
