import logo from "./assets/img/Logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Row, Col, Card, Button } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

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

      <section class="sessao2">
        <Container fluid>
          <Row>
            <Col className="mx-6 py-5" bg="dark">
              <Carousel responsive={responsive}>
                <Container>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Container>

                <Container>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Container>

                <Container>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Container>
                <Container>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Container>

                <Container>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Container>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default App;
