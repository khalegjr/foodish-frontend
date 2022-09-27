import React from "react";
import PropTypes from "prop-types";
import CardReceita from "../../components/CardReceita";
import { Col, Container, Row } from "react-bootstrap";
import CarouselSession from "../../components/Carousel";

const SessionOne = () => {
  return (
    <>
      <section class="sessao2">
        <Container className="text-black">
          <Row>
            <Col
              className="mx-6 py-5 justify-content-center align-items-center"
              bg="dark"
            >
              <CarouselSession />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

SessionOne.propTypes = {};

export default SessionOne;
