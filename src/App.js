import logo from "./assets/img/Logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Row, Col } from "react-bootstrap";

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

      <main class="sessa1">
        <Container fluid>
          <Row>
            <Col className="mx-6" bg="dark">
              1 of 1
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
