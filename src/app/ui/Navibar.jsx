import React from "react";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import { HiInboxArrowDown } from "react-icons/hi2";
import { TfiHelpAlt } from "react-icons/tfi";
import { TiMessages } from "react-icons/ti";
import { IoMdNotifications } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";
import { Search } from "../pages/Search";

function Navibar({ children }) {
  return (
    <>
      <div
        bg="#36393F"
        variant="dark"
        style={{
          borderBottom: "outset",
          borderWidth: "1px",
          borderColor: "darkgray",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex" }}>
            <Tippy content={<span>Direct</span>} placement="bottom">
              <Link
                to="/direct"
                key="1"
                className="link"
                activeclassname="active"
              >
                <div className="icon-nav" key="1">
                  <TiMessages />
                </div>
              </Link>
            </Tippy>
            <Tippy content={<span>notifications</span>} placement="bottom">
              <Link
                to="/navi/notifications"
                key="2"
                className="link"
                activeclassname="active"
              >
                <div className="icon-nav" key="2">
                  <IoMdNotifications />
                </div>
              </Link>
            </Tippy>
            <Tippy content={<span>members</span>} placement="bottom">
              <Link
                to="/navi/members"
                key="3"
                className="link"
                activeclassname="active"
              >
                <div className="icon-nav" key="3">
                  <BsFillPeopleFill />
                </div>
              </Link>
            </Tippy>
          </div>
          <div style={{ display: "flex" }}>
            <Search className="input-nav" placeholder="Search" />
            <Tippy content={<span>inbox</span>} placement="bottom">
              <Link
                to="/navi/inbox"
                className="link"
                activeclassname="active"
                key="4"
              >
                <div className="icon-nav" key="4">
                  <HiInboxArrowDown />
                </div>
              </Link>
            </Tippy>
            <Tippy content={<span>help</span>} placement="bottom">
              <Link
                to="/navi/help"
                className="link"
                activeclassname="active"
                key="5"
              >
                <div className="icon-nav" key="6">
                  <TfiHelpAlt />
                </div>
              </Link>
            </Tippy>
          </div>
        </div>
        <main>{children}</main>
      </div>
    </>
  );
}

export { Navibar };
