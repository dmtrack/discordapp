import React from "react";

function Search({ className, placeholder }) {
  return (
    <>
      <input type="search" className={className} placeholder={placeholder} />
    </>
  );
}

export { Search };
