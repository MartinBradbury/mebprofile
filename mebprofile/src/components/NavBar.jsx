import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styles from "../styles/NavBar.module.css";

export class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar className={styles.bg} expand="lg" fixed="top">
          <Navbar.Brand className={styles.brand} as={NavLink} to="/">
            Martin Bradbury
          </Navbar.Brand>
          <Nav className={styles.buttonPosition}>
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
              className={({isActive}) => 
              isActive
              ? `${styles.activeButton} ${styles.button}` : styles.button}
              >
              Contact

            </NavLink>
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
