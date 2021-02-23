import React, { useEffect, useState } from "react";
import "../app.css";
import axios from "axios";

function CategoryBox(props) {
  //   const [categoriesAmount, setCategoriesAmount] = useState("");
  //   useEffect(() => {
  //     axios.get(`/api/catg`).then((res) => {
  //       setCategoriesAmount(res.data.data);
  //     });
  //   }, []);
  return (
    <div className="col-lg-6 mb-4">
      <div className="card bg-info text-white shadow">
        <div className="card-body">
          {props.name}:<div>{props.products} Products</div>
        </div>
      </div>
    </div>
  );
}

export default CategoryBox;
