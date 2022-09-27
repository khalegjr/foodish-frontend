import React from "react";
import PropTypes from "prop-types";
import { Button, Container } from "react-bootstrap";

import "./styles.scss";

export const ButtonSend = (props) => {
  return (
    <>
      <Button
        className="textColor-white textFamily-Poppins-Light"
        style={{
          fontSize: "2rem",
          borderRadius: "4px",
        }}
      >
        {props.children}
      </Button>
    </>
  );
};

ButtonSend.propTypes = {};

export const ButtonClear = (props) => {
  return (
    <>
      <Button
        variant="default"
        className="textColor-white bgColor-black-transparent textFamily-Poppins-Regular"
        style={{
          fontSize: "2rem",
          border: "1px solid #FFFFFF",
          borderRadius: "4px",
        }}
      >
        {props.children}
      </Button>
    </>
  );
};

ButtonClear.propTypes = {};

export const ButtonDefault = (props) => {
  return (
    <>
      <Container>
        <Button
          className="textColor-white textFamily-Helvetica-Regular"
          style={{
            fontSize: "1.25rem",
            borderRadius: "4px",
          }}
        >
          {props.children}
        </Button>
      </Container>
    </>
  );
};

ButtonDefault.propTypes = {};

export const ButtonCardReceita = (props) => {
  return (
    <>
      <Container>
        <Button
          className="textColor-white textFamily-Poppins-Regular"
          style={{
            fontSize: "1.25rem",
            borderRadius: "4px",
          }}
        >
          {props.children}
        </Button>
      </Container>
    </>
  );
};

ButtonCardReceita.propTypes = {};
