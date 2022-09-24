import logo from "./assets/img/Logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Navbar,
  Row,
  Col,
  Card,
  Button,
  Image,
} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "./assets/img/5c2e894fed6dddaf5b0998129bafd941.png";

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
        <Container fluid className="text-black">
          <Row>
            <Col className="mx-6 py-5" bg="dark">
              <Carousel
                responsive={responsive}
                sliderClass=""
                slidesToSlide={1}
                swipeable
                infinite
              >
                <Container className="align-items-center">
                  <Card
                    style={{
                      width: "428px",
                      height: "417px",
                      alignItems: "center",
                      /* UI Properties */
                      background: "#FFFFFF 0% 0% no-repeat padding-box",
                      opacity: "1",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src="https://picsum.photos/id/200/180/180"
                      style={{
                        /* Layout Properties */
                        width: "180px",
                        height: "180px",
                        /* UI Properties */
                        boxShadow: "0px 3px 24px #00000029",
                        opacity: "1",
                        borderRadius: 100,
                      }}
                    />
                    <Card.Body>
                      <Card.Title
                        style={{
                          /* UI Properties */
                          textAlign: "center",
                          font: "normal normal bold 48px/96px Poppins",
                          letterSpacing: "0px",
                          color: "#121212",
                          opacity: "1",
                        }}
                      >
                        Receita 01
                      </Card.Title>
                      <Card.Text
                        style={{
                          /* UI Properties */
                          textAlign: "center",
                          font: "normal normal normal 22px/29px Roboto",
                          letterSpacing: "0px",
                          color: "#222222",
                          opacity: "1",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt
                      </Card.Text>
                      <Button
                        variant="primary"
                        style={{
                          /* UI Properties */
                          background: "#5B6ED6 0% 0% no-repeat padding-box",
                          borderRadius: "4px",
                          opacity: "1",
                          textAlign: "center",
                          font: "normal normal normal 20px/30px Poppins",
                          letterSpacing: "0px",
                          color: "#FFFFFF",
                          margin: "0 auto",
                        }}
                      >
                        Learn more
                      </Button>
                    </Card.Body>
                  </Card>
                </Container>

                <Container className="align-items-center">
                  <Card
                    style={{
                      width: "428px",
                      height: "417px",
                      alignItems: "center",
                      /* UI Properties */
                      background: "#FFFFFF 0% 0% no-repeat padding-box",
                      opacity: "1",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src="https://picsum.photos/id/201/180/180"
                      style={{
                        /* Layout Properties */
                        width: "180px",
                        height: "180px",
                        /* UI Properties */
                        boxShadow: "0px 3px 24px #00000029",
                        opacity: "1",
                        borderRadius: 100,
                      }}
                    />
                    <Card.Body>
                      <Card.Title
                        style={{
                          /* UI Properties */
                          textAlign: "center",
                          font: "normal normal bold 48px/96px Poppins",
                          letterSpacing: "0px",
                          color: "#121212",
                          opacity: "1",
                        }}
                      >
                        Receita 02
                      </Card.Title>
                      <Card.Text
                        style={{
                          /* UI Properties */
                          textAlign: "center",
                          font: "normal normal normal 22px/29px Roboto",
                          letterSpacing: "0px",
                          color: "#222222",
                          opacity: "1",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt
                      </Card.Text>
                      <Button
                        variant="primary"
                        style={{
                          /* UI Properties */
                          background: "#5B6ED6 0% 0% no-repeat padding-box",
                          borderRadius: "4px",
                          opacity: "1",
                          textAlign: "center",
                          font: "normal normal normal 20px/30px Poppins",
                          letterSpacing: "0px",
                          color: "#FFFFFF",
                          margin: "0 auto",
                        }}
                      >
                        Learn more
                      </Button>
                    </Card.Body>
                  </Card>
                </Container>

                <Container className="align-items-center">
                  <Card
                    style={{
                      width: "428px",
                      height: "417px",
                      alignItems: "center",
                      /* UI Properties */
                      background: "#FFFFFF 0% 0% no-repeat padding-box",
                      opacity: "1",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src="https://picsum.photos/id/202/180/180"
                      style={{
                        /* Layout Properties */
                        width: "180px",
                        height: "180px",
                        /* UI Properties */
                        boxShadow: "0px 3px 24px #00000029",
                        opacity: "1",
                        borderRadius: 100,
                      }}
                    />
                    <Card.Body>
                      <Card.Title
                        style={{
                          /* UI Properties */
                          textAlign: "center",
                          font: "normal normal bold 48px/96px Poppins",
                          letterSpacing: "0px",
                          color: "#121212",
                          opacity: "1",
                        }}
                      >
                        Receita 03
                      </Card.Title>
                      <Card.Text
                        style={{
                          /* UI Properties */
                          textAlign: "center",
                          font: "normal normal normal 22px/29px Roboto",
                          letterSpacing: "0px",
                          color: "#222222",
                          opacity: "1",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt
                      </Card.Text>
                      <Button
                        variant="primary"
                        style={{
                          /* UI Properties */
                          background: "#5B6ED6 0% 0% no-repeat padding-box",
                          borderRadius: "4px",
                          opacity: "1",
                          textAlign: "center",
                          font: "normal normal normal 20px/30px Poppins",
                          letterSpacing: "0px",
                          color: "#FFFFFF",
                          margin: "0 auto",
                        }}
                      >
                        Learn more
                      </Button>
                    </Card.Body>
                  </Card>
                </Container>

                <Container className="align-items-center">
                  <Card
                    style={{
                      width: "428px",
                      height: "417px",
                      alignItems: "center",
                      /* UI Properties */
                      background: "#FFFFFF 0% 0% no-repeat padding-box",
                      opacity: "1",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src="https://picsum.photos/id/203/180/180"
                      style={{
                        /* Layout Properties */
                        width: "180px",
                        height: "180px",
                        /* UI Properties */
                        boxShadow: "0px 3px 24px #00000029",
                        opacity: "1",
                        borderRadius: 100,
                      }}
                    />
                    <Card.Body>
                      <Card.Title
                        style={{
                          /* UI Properties */
                          textAlign: "center",
                          font: "normal normal bold 48px/96px Poppins",
                          letterSpacing: "0px",
                          color: "#121212",
                          opacity: "1",
                        }}
                      >
                        Receita 04
                      </Card.Title>
                      <Card.Text
                        style={{
                          /* UI Properties */
                          textAlign: "center",
                          font: "normal normal normal 22px/29px Roboto",
                          letterSpacing: "0px",
                          color: "#222222",
                          opacity: "1",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt
                      </Card.Text>
                      <Button
                        variant="primary"
                        style={{
                          /* UI Properties */
                          background: "#5B6ED6 0% 0% no-repeat padding-box",
                          borderRadius: "4px",
                          opacity: "1",
                          textAlign: "center",
                          font: "normal normal normal 20px/30px Poppins",
                          letterSpacing: "0px",
                          color: "#FFFFFF",
                          margin: "0 auto",
                        }}
                      >
                        Learn more
                      </Button>
                    </Card.Body>
                  </Card>
                </Container>

                <Container className="align-items-center">
                  <Card
                    style={{
                      width: "428px",
                      height: "417px",
                      alignItems: "center",
                      /* UI Properties */
                      background: "#FFFFFF 0% 0% no-repeat padding-box",
                      opacity: "1",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src="https://picsum.photos/id/204/180/180"
                      style={{
                        /* Layout Properties */
                        width: "180px",
                        height: "180px",
                        /* UI Properties */
                        boxShadow: "0px 3px 24px #00000029",
                        opacity: "1",
                        borderRadius: 100,
                      }}
                    />
                    <Card.Body>
                      <Card.Title
                        style={{
                          /* UI Properties */
                          textAlign: "center",
                          font: "normal normal bold 48px/96px Poppins",
                          letterSpacing: "0px",
                          color: "#121212",
                          opacity: "1",
                        }}
                      >
                        Receita 05
                      </Card.Title>
                      <Card.Text
                        style={{
                          /* UI Properties */
                          textAlign: "center",
                          font: "normal normal normal 22px/29px Roboto",
                          letterSpacing: "0px",
                          color: "#222222",
                          opacity: "1",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt
                      </Card.Text>
                      <Button
                        variant="primary"
                        style={{
                          /* UI Properties */
                          background: "#5B6ED6 0% 0% no-repeat padding-box",
                          borderRadius: "4px",
                          opacity: "1",
                          textAlign: "center",
                          font: "normal normal normal 20px/30px Poppins",
                          letterSpacing: "0px",
                          color: "#FFFFFF",
                          margin: "0 auto",
                        }}
                      >
                        Learn more
                      </Button>
                    </Card.Body>
                  </Card>
                </Container>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      <section class="sessao3">
        <Container>
          <Row>
            <Col sm={8}>
              <Container>
                <h2
                  style={{
                    /* UI Properties */
                    textAlign: "left",
                    font: "normal normal bold 48px/96px Poppins",
                    letterSpacing: "0px",
                    color: "#FFFFFF",
                    opacity: "1",
                  }}
                >
                  Lorem ipsum sit
                </h2>

                <p
                  style={{
                    textAlign: "left",
                    font: "normal normal normal 22px/33px Poppins",
                    letterSpacing: "0px",
                    color: "#FFFFFF",
                    opacity: "1",
                  }}
                >
                  Amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <p
                  style={{
                    textAlign: "left",
                    font: "normal normal normal 22px/33px Poppins",
                    letterSpacing: "0px",
                    color: "#FFFFFF",
                    opacity: "1",
                  }}
                >
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </Container>
            </Col>
            <Col sm={4}>
              <Card className="bg-dark text-white">
                <Card.Img
                  src={image1}
                  alt="Card image"
                  style={{
                    width: "650px",
                    height: "384px",
                    /* UI Properties */
                    opacity: "1",
                  }}
                />
                <Card.ImgOverlay></Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default App;
