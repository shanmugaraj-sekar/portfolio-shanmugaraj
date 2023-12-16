import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../img/icon-portfolio.png";
import "../style/home.css";

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="fixed-top shadow"
    >
      <Navbar.Brand href="#home" className="ps-10 ps-3">
        <h6 className="nav-txt">Shanmugaraj</h6>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="pe-5">
        <Nav className="ms-auto gap-5">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
