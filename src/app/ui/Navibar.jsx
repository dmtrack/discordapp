import React from "react";
import { NavbarBrand, Navbar, Nav, Button } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navibar() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <NavbarBrand>Discord</NavbarBrand>
        <NavbarToggle aria-controls="responsible-navbar-nav" />
        <NavbarCollapse id='"responsible-navbar-nav"'>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/direct">Direct</Link>
              <Link to="/server1">Server 1</Link>
              <Link to="/server2">Server 2</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Button type="secondary" onClick={() => navigate("/inbox")}>
              Inbox
            </Button>
            <Button type="secondary" onClick={() => navigate("/help")}>
              Help
            </Button>
          </Nav>
        </NavbarCollapse>
      </Navbar>
    </>
  );
}

export { Navibar };
