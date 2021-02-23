import React, { useState } from "react";
import "../app.css";
import axios from "axios";

function AmountProducts() {
  const [productsAmount, setProductsAmount] = useState("");
  axios.get(`/api/products`).then((res) => {
    setProductsAmount(res.data.count);
    console.log(res);
  });
  return (
    <div className="col-md-4 mb-4">
      <div className="card border-left-primary shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                {" "}
                Products in Data Base
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {productsAmount}
              </div>
            </div>
            <div className="col-auto">
              <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AmountProducts;
