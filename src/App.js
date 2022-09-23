import logo from "./assets/img/Logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Row, Col, Card, Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header class="my-3">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand>
              <img src={logo} className="mx-6" alt="logo" />
            </Navbar.Brand>
          </Container>
        </Navbar>
      </header>
      {/* TODO: verificar alinhamento e as fontes */}
      <main class="sessao1">
        <Container fluid>
          <Row>
            <Col className="mx-6" bg="dark">
              <Card
                body="false"
                bg="dark"
                className="mx-5 p-5"
                style={{
                  top: "237px",
                  left: "287px",
                  width: "654px",
                  height: "471px",
                  opacity: "1",
                  background: "transparent",
                  // TODO: FIX - a transparência do card
                }}
              >
                <Card.Body>
                  <Card.Title
                    style={{
                      /* Layout Properties */
                      top: "237px",
                      left: "302px",
                      width: "639px",
                      height: "231px",
                      /* UI Properties */
                      textAlign: "left",
                      font: "normal normal bold 96px/96px Poppins",
                      letterSpacing: "0px",
                      color: "#FFFFFF",
                      opacity: "1",
                    }}
                  >
                    Teste o estilo de vida
                  </Card.Title>
                  <Card.Text
                    style={{
                      top: "475px",
                      left: "302px",
                      width: "539px",
                      height: "116px",
                      textAlign: "left",
                      font: "normal normal 300 32px/48px Poppins",
                      letterSpacing: "0px",
                      color: "#FFFFFF",
                      opacity: "1",
                    }}
                  >
                    H3: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt
                  </Card.Text>
                  <Button
                    variant="primary"
                    style={{
                      /* Layout Properties */
                      top: "648px",
                      left: "302px",
                      width: "117px",
                      height: "48px",
                      /* UI Properties */
                      background: "#5B6ED6 0% 0% no-repeat padding-box",
                      borderRadius: "4px",
                      opacity: "1",
                      letterSpacing: "0",
                      font: "normal normal normal 20px/24px Helvetica",
                      color: "#FFFFFF",
                    }}
                  >
                    Vamos lá!
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
