import React from "react";
import { Container, Navbar } from "react-bootstrap";
import logo from "../../assets/img/Logo.svg";
import "./style.scss";

const Header = () => {
  return (
    <>
        <Navbar >
            <Navbar.Brand>
              <img src={logo} className="brand" alt="logo foodish" />
            </Navbar.Brand>
        </Navbar>
    </>
  );
};

export default Header;
