import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export class NavBar extends Component {
  render() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
        <Container>
          <Navbar.Brand href="/">Martin Bradbury</Navbar.Brand>
          <Nav variant="pills" defaultActiveKey="/">
            <Nav.Item>
              <Nav.Link as={NavLink} to="/" exact>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/about" exact>
                About
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
