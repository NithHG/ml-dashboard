import React, { useEffect, useState } from "react";
import "../app.css";
import axios from "axios";
import ProductRow from "./ProductRow.js";

function DataTales() {
  const [productsAmount, setProductsAmount] = useState([]);
  useEffect(() => {
    axios.get(`/api/Products`).then((res) => {
      setProductsAmount(res.data.Products);
      console.log(res.data.data);
    });
  }, []);
  return (
    <div class="card shadow mb-4">
      <div class="card-body">
        <div class="table-responsive">
          <table
            class="table table-bordered"
            id="dataTable"
            width="100%"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                {/* <th>Categories</th> */}
                {/* <th>Colors</th> */}
                <th>Discount</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                {/* <th>Categories</th> */}
                {/* <th>Colors</th> */}
                <th>Discount</th>
              </tr>
            </tfoot>
            <tbody>
              {productsAmount.map((object, i) => (
                <ProductRow
                  obj={object}
                  key={i}
                  name={object.name}
                  price={"$" + object.price}
                  description={
                    object.description.substring(0, 30) +
                    // object.description.substring(20, 40) +
                    " (...)"
                  }
                  // category={object.category.category}
                  // gender={object.gender.gender}
                  // brand={object.brand.brand}
                  stock={object.discount}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DataTales;
