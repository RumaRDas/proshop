import React from "react";
import { Navbar, Nav, Container, NavbarBrand, NavLink } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { FaShoppingCart, FaUser } from "react-icons/fa";

function Header() {
  return (
    <header>
      <Navbar bg="secondary" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <NavbarBrand hrf="/">ProShop</NavbarBrand>
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink href="/cart">
                <FaShoppingCart />
                Cart
              </NavLink>
              <NavLink href="/login">
                <FaUser />
                Sign In
              </NavLink>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
