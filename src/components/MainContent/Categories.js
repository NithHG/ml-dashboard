import React, { useEffect, useState } from "react";
import "../app.css";
import axios from "axios";
import CategoryBox from "./CategoryBox.js";

function Categories() {
  const [categoriesAmount, setCategoriesAmount] = useState([]);
  useEffect(() => {
    axios.get(`/api/catg`).then((res) => {
      setCategoriesAmount(res.data.data);
      console.log(res.data.data);
      // console.log(res.data.data.length);
    });
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Categories in Data Base
          </h6>
        </div>
        <div className="card-body">
          <div className="row">
            {categoriesAmount.map((object, i) => (
              <CategoryBox
                obj={object}
                key={i}
                name={object.category}
                products={object.products.length}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
