import React from "react";
import { Search } from "./Search";

function DirectMessages() {
  return (
    <>
      <div className="main-content">
        <h1 className="heading">Direct messages</h1>
        <div className="text-area">TEXT</div>
        <div style={{ display: "flex" }}>
          <Search className="input-message" placeholder="Type here..." />
        </div>
      </div>
    </>
  );
}
export { DirectMessages };
