import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

const CardReceita = () => {
  return (
    <>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
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
    </>
  );
};

CardReceita.propTypes = {};

export default CardReceita;
