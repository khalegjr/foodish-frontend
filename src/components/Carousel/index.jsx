import React from "react";
import propTypes from "prop-types";
import CardReceita from "../CardReceita";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.scss"

const CarouselComponent = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { min: 3000 },
      items: 5,
    },
    largeDesktop: {
      breakpoint: { max: 2999 , min: 1440 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1439, min: 769 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 426 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 1,
    },
  };

  return (
    <>
        <Carousel
          responsive={responsive}
          arrows={true}
          className="carousel-container"
          slidesToSlide={1}
          swipeable
        >
          <CardReceita />
          <CardReceita />
          <CardReceita />
          <CardReceita/>
          <CardReceita/>
          <CardReceita/>
          <CardReceita />
          <CardReceita />
          <CardReceita />
          <CardReceita/>
          <CardReceita/>
          <CardReceita/>
        </Carousel>
    </>
  );
};

CarouselComponent.propTypes = {};

export default CarouselComponent;
