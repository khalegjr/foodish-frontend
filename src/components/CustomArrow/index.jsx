import * as React from "react";
import { Container } from "react-bootstrap";
import "./styles.css";
import arrow from "./arrow-left.svg";

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      aria-label="Go to next slide"
      className="custom-right-arrow"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29.169"
        height="48"
        viewBox="0 0 29.169 48"
      >
        <path
          id="arrow-right"
          d="M-310.831-979a5.153,5.153,0,0,1,3.655,1.514l18.831,18.831h0l0,0h0l0,0h0l.014.014A5.153,5.153,0,0,1-286.831-955a5.153,5.153,0,0,1-1.5,3.646h0l-.005.005,0,0,0,0h0l-18.831,18.831a5.169,5.169,0,0,1-7.31,0A5.153,5.153,0,0,1-316-936.169a5.153,5.153,0,0,1,1.514-3.655L-299.311-955l-15.176-15.175A5.153,5.153,0,0,1-316-973.831a5.153,5.153,0,0,1,1.514-3.655A5.153,5.153,0,0,1-310.831-979Z"
          transform="translate(-286.831 -931) rotate(180)"
          fill="#fff"
        />
      </svg>
    </button>
  );
};

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      className="custom-left-arrow"
      onClick={() => onClick()}
      aria-label="Go to previous slide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29.169"
        height="48"
        viewBox="0 0 29.169 48"
      >
        <path
          id="arrow-right"
          d="M-310.831-979a5.153,5.153,0,0,1,3.655,1.514l18.831,18.831h0l0,0h0l0,0h0l.014.014A5.153,5.153,0,0,1-286.831-955a5.153,5.153,0,0,1-1.5,3.646h0l-.005.005,0,0,0,0h0l-18.831,18.831a5.169,5.169,0,0,1-7.31,0A5.153,5.153,0,0,1-316-936.169a5.153,5.153,0,0,1,1.514-3.655L-299.311-955l-15.176-15.175A5.153,5.153,0,0,1-316-973.831a5.153,5.153,0,0,1,1.514-3.655A5.153,5.153,0,0,1-310.831-979Z"
          transform="translate(-286.831 -931) rotate(180)"
          fill="#fff"
        />
      </svg>
    </button>
  );
};

const CustomButtonGroup = ({ next, previous, goToSlide, carouselState }) => {
  const { totalItems, currentSlide } = carouselState;
  return (
    <Container className="custom-button-group">
      <CustomLeftArrow onClick={() => previous()} />
      <CustomRightArrow onClick={() => next()} />
    </Container>
  );
};

export { CustomLeftArrow, CustomRightArrow, CustomButtonGroup };
