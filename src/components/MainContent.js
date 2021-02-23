import React from "react";
import "./app.css";
import Topbar from "./MainContent/Topbar.js";
import PageContent from "./MainContent/PageContent";

function MainContent() {
  return (
    <div id="content">
      <Topbar />
      <PageContent />
    </div>
  );
}

export default MainContent;
