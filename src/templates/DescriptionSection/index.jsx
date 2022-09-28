import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import imageRef from "../../assets/img/5c2e894fed6dddaf5b0998129bafd941.png";
import "./style.scss"
const SessionTwo = () => {
  return (
    <>
      <Container as="section" className="description-container" fluid>
        <div className="description-texts">
          <h2 className="text-white">Lorem ipsum sit</h2>
          <p className="text-white">
                  Amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-white">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
          </p>     
        </div>
        <Image
           sr
           className="image"
           fluid
           src={imageRef}
           alt="Card image"
        />
      </Container>
    </>
  );
};

SessionTwo.propTypes = {};

export default SessionTwo;
