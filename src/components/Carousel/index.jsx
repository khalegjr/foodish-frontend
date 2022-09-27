import React from "react";
import PropTypes from "prop-types";

import { ButtonGroup, Container } from "react-bootstrap";
import CardReceita from "../CardReceita";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  CustomLeftArrow,
  CustomRightArrow,
  CustomButtonGroup,
} from "../CustomArrow";

const CarouselSession = () => {
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
      <Container>
        <Carousel
          responsive={responsive}
          arrows={true}
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
      </Container>
    </>
  );
};

CarouselSession.propTypes = {};

export default CarouselSession;
