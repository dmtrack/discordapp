import React from "react";
import { NavbarBrand, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";

function Navibar() {
  return (
    <>
      <Navbar
        bg="#36393F"
        variant="dark"
        style={{
          borderBottom: "outset",
          borderWidth: "1px",
          borderColor: "darkgray",
        }}
      >
        <div style={{ display: "flex" }}>
          <Nav.Link style={{ display: "flex" }}>
            <Tippy content={<span>Direct</span>} placement="bottom">
              <Link
                to="/direct"
                key="1"
                className="link"
                activeclassname="active"
              >
                Direct
              </Link>
            </Tippy>
            <Tippy content={<span>Server 1</span>} placement="bottom">
              <Link
                to="/server1"
                key="2"
                className="link"
                activeclassname="active"
              >
                Server 1
              </Link>
            </Tippy>

            <Tippy content={<span>Server 2</span>} placement="bottom">
              <Link
                to="/server2"
                key="3"
                className="link"
                activeclassname="active"
              >
                Server 2
              </Link>
            </Tippy>
          </Nav.Link>
          <Nav.Link style={{ display: "flex" }}>
            <input type="search" />
            <Tippy content={<span>inbox</span>} placement="bottom">
              <Link
                to="/inbox"
                className="link"
                activeclassname="active"
                key="4"
              >
                <div>Icon</div>
              </Link>
            </Tippy>
            <Tippy content={<span>help</span>} placement="bottom">
              <Link
                to="/help"
                className="link"
                activeclassname="active"
                key="5"
              >
                <div>Icon</div>
              </Link>
            </Tippy>
          </Nav.Link>
        </div>
      </Navbar>
    </>
  );
}

export { Navibar };
