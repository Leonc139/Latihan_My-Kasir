import React from "react";
import { Navbar, Container } from "react-bootstrap";

const NavBarComponent = () => {
  return (
    <Navbar variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <strong>MY-KasirAPP</strong>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
