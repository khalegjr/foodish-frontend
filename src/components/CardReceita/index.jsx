import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import cardImage from "../../assets/img/cardImage.png";
import "./style.scss"

const CardReceita = () => {
  return (
    <>
      <img src={cardImage} className="card-image"/>
      <Card
        style={{
          width: "320px",
          height: "300px",
          background: "#FFFFFF",
          margin: "0 5px"
        }}
        className="card-container"
      >
       {/*  <Card.Img
          variant="top"
          src="https://picsum.photos/id/200/180/180"
          style={{
            width: "180px",
            height: "180px",
            // boxShadow: "0px 3px 24px #00000029",
            borderRadius: 100,
          }}
        /> */}
        <Card.Body>
          <div style={{
             display: "flex",
             flexDirection: "column",
             justifyContent: "center",
             alignItems: "center",
          }}>
            <Card.Title
              style={{
                textAlign: "center",
                font: "normal normal bold 36px/72px Poppins",
                letterSpacing: "0px",
                color: "#121212",
                opacity: "1",
              }}
              className="card-title"
            >
              Receita 01
            </Card.Title>
            <Card.Text
              style={{
                textAlign: "center",
                font: "normal normal normal 16px/32px Roboto",
                letterSpacing: "0px",
                color: "#222222",
                opacity: "1",
              }}
              className="card-text"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </Card.Text>
            <Button
              variant="primary"
              style={{
                borderRadius: "4px",
                opacity: "1",
                textAlign: "center",
                font: "normal normal normal 20px/30px Poppins",
                letterSpacing: "0px",
                color: "#FFFFFF",
                margin: "0 auto",
              }}
              className="card-button"
            >
              Learn more
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

CardReceita.propTypes = {};

export default CardReceita;
