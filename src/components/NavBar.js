import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar className="border-bottom" bg="transparent" expand="lg">
      <Navbar.Brand> Harry Is Here</Navbar.Brand>
      <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
      <Navbar.Collapse id="navbar-toggle">
        <Nav className="ml-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="about">
            About
          </Link>
          <Link className="nav-link" to="contact">
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
