import React from "react";
import "../app.css";
import AmountProducts from "./AmountProducts.js";
// import AmountCategories from "./AmountCategories.js";
import CostProducts from "./CostProducts.js";
import AmountUsers from "./AmountUsers.js";
import LastProduct from "./LastProduct.js";
import Categories from "./Categories.js";
import DataTales from "./DataTales.js";

function PageContent() {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
      </div>
      <div className="row">
        <AmountProducts />
        {/* <AmountCategories /> */}
        <AmountUsers />
        <CostProducts />
      </div>
      <div className="row">{/* <LastProduct />
        <Categories /> */}</div>
      <h1 className="h3 mb-2 text-gray-800">
        All the products in the Database
      </h1>
      <DataTales />
    </div>
  );
}

export default PageContent;
