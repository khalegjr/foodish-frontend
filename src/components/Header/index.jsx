import React from "react";
import { Container, Navbar } from "react-bootstrap";
import logo from "../../assets/img/Logo.svg";

const Header = () => {
  return (
    <>
      <header className="my-3">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand>
              <img src={logo} className="mx-6 img-fluid" alt="logo foodish" />
            </Navbar.Brand>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
