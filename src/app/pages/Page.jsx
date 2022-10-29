import { Search } from "../pages/Search";
import React from "react";

function Members() {
  return (
    <>
      <div className="main-content">
        <h1>Members</h1>
        <div style={{ display: "flex" }}>
          <Search className="input-message" placeholder="Search" />
        </div>
      </div>
    </>
  );
}

export { Members };
