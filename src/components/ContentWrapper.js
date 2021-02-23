import React from "react";
import "./app.css";
import MainContent from "./MainContent.js";
import Footer from "./Footer";

function ContentWrapper() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <MainContent />
      <Footer />
    </div>
  );
}

export default ContentWrapper;
