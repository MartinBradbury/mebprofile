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
            <NavLink className={styles.button} as={NavLink} to="/" exact>
              Home
            </NavLink>
            <NavLink className={styles.button} as={NavLink} to="/about">
              About
            </NavLink>
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default NavBar;



