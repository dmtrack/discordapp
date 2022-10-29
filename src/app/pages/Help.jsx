import React from "react";
import { Search } from "./Search";

function Help() {
  return (
    <>
      <div className="main-content">
        <h1 className="heading">Write your request</h1>
        <div className="text-area">TEXT</div>
        <div style={{ display: "flex" }}>
          <Search className="input-message" placeholder="Type here..." />
        </div>
      </div>
    </>
  );
}
export { Help };
