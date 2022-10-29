import React from "react";
import { Search } from "./Search";

function Notifications() {
  return (
    <>
      <div className="main-content">
        <h1 className="heading">Your notifications</h1>

        <div style={{ display: "flex" }}>
          <Search className="input-message" placeholder="Type here..." />
        </div>
      </div>
    </>
  );
}
export { Notifications };
