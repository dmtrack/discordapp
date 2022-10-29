import { Search } from "../pages/Search";
import React from "react";
import { useParams } from "react-router-dom";

function Page() {
  const { page } = useParams();

  return (
    <>
      <div className="main-content">
        <h1>{page}</h1>
        <div style={{ display: "flex" }}>
          <Search className="input-message" placeholder="Search" />
        </div>
      </div>
    </>
  );
}

export { Page };
