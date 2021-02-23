import React from "react";
import "./app.css";
import Sidebar from "./Sidebar.js";
import ContentWrapper from "./ContentWrapper.js";

function Body() {
  return (
    <div id="wrapper">
      <Sidebar />
      <ContentWrapper />
    </div>
  );
}

export default Body;
