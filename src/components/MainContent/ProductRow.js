import React, { useEffect, useState } from "react";
import "../app.css";
import axios from "axios";

function ProductRow(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>{props.price}</td>
      {/* <td>
        <ul>
          <li>{props.category}</li>
          <li>{props.gender}</li>
          <li>{props.brand}</li>
        </ul>
      </td> */}
      {/* <td>
        <ul>
          <li>
            <span class="text-danger">Red</span>
          </li>
          <li>
            <span class="text-primary">Blue</span>
          </li>
          <li>
            <span class="text-success">Green</span>
          </li>
        </ul>
      </td> */}
      <td>{props.stock}%</td>
    </tr>
  );
}

export default ProductRow;
