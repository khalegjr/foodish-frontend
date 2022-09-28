import React from "react";
import propTypes from "prop-types";
import CarouselComponent from "../../components/Carousel";
import "./style.scss"

const CarouselSection = () => {
  return (
    <>
      <section className="carousel-session-container">
          <CarouselComponent />
      </section>
    </>
  );
};

CarouselSection.propTypes = {};

export default CarouselSection;
