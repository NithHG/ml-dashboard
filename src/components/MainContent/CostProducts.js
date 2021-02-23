import React, { useState } from "react";
import "../app.css";
import axios from "axios";

function CostProducts() {
  const [totalPrice, setTotalPrice] = useState("");
  axios.get(`/api/products`).then((res) => {
    setTotalPrice(res.data.totalPrice);
    console.log(totalPrice);
  });
  return (
    <div className="col-md-4 mb-4">
      <div className="card border-left-success shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                {" "}
                Amount in products
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                ${totalPrice}
              </div>
            </div>
            <div className="col-auto">
              <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CostProducts;
