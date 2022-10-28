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
      <div className="navi-bar">
        <Navbar
          collapseOnSelect
          expand="sm"
          bg="#36393F"
          variant="dark"
          className="navi-bar"
          style={{
            borderBottom: "outset",
            borderWidth: "1px",
            borderColor: "darkgray",
          }}
        >
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
              <Button
                className="btn-secondary"
                type="secondary"
                onClick={() => navigate("/inbox")}
              >
                Inbox
              </Button>
              <Button
                className="btn-secondary"
                type="secondary"
                onClick={() => navigate("/help")}
              >
                Help
              </Button>
            </Nav>
          </NavbarCollapse>
        </Navbar>
      </div>
    </>
  );
}

export { Navibar };
