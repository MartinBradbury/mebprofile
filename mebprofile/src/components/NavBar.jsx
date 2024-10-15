import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styles from "../styles/NavBar.module.css";
import NavDropdown from "react-bootstrap/NavDropdown";

export class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar className={styles.bg} expand="lg" fixed="top" variant="dark">
          <Container fluid>
            {/* Navbar Brand (Logo/Title) */}
            <Navbar.Brand href="#home" className={styles.brand}>
              Martin
            </Navbar.Brand>
            
            {/* Navbar Toggle for mobile */}
            <Navbar.Toggle aria-controls="navbar-responsive" />
            
            {/* Collapsible Navbar */}
            <Navbar.Collapse id="navbar-responsive">
              <Nav className="ms-auto">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.button} ${styles.activeButton}`
                      : styles.button
                  }
                >
                  Home
                </NavLink>

                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.button} ${styles.activeButton}`
                      : styles.button
                  }
                >
                  About
                </NavLink>

                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.activeButton} ${styles.button}`
                      : styles.button
                  }
                >
                  Contact
                </NavLink>
              </Nav>

              {/* LinkedIn Button */}
              <Nav className="ms-auto">
                <NavLink to="https://www.linkedin.com" target="_blank">
                  <button className={styles.linkedInBtn}>
                    LinkedIn <i className="fa-solid fa-up-right-from-square"></i>
                  </button>
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
