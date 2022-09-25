import React from "react";
import PropTypes from "prop-types";
import CardReceita from "../../components/CardReceita";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";

const SessionOne = () => {
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

  return (
    <>
      <section class="sessao2 justify-content-center align-items-center">
        <Container className="text-black">
          <Row>
            <Col
              className="mx-6 py-5 justify-content-center align-items-center"
              bg="dark"
            >
              <Carousel
                responsive={responsive}
                sliderClass=""
                slidesToSlide={1}
                swipeable
                infinite
              >
                <Container className="align-items-center">
                  <CardReceita />
                </Container>

                <Container className="align-items-center">
                  <CardReceita />
                </Container>

                <Container className="align-items-center">
                  <CardReceita />
                </Container>

                <Container className="align-items-center">
                  <CardReceita />
                </Container>

                <Container className="align-items-center">
                  <CardReceita />
                </Container>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

SessionOne.propTypes = {};

export default SessionOne;
