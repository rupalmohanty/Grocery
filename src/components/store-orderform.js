import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const StoreOrder = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/storeorder/").then((response) => {
      response.data.map((data) => {
        setData((oldArray) => [...oldArray, data]);
        return 0;
      });
    });
  }, []);

  const deleteProduct = (id) => {
    axios.delete("http://localhost:5000/storeorder/" + id).then((response) => {
      console.log(response.data);
    });

    setData(
      Data.filter((el) => {
        return el._id !== id;
      })
    );
  };
  return (
    <div>
      <h3>StoreOrder Form</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>storeObjId</th>
            <th>productidObjid</th>
            <th>Skuid</th>
            <th>Product</th>
            <th>Origin</th>
            <th>Price</th>
            <th>CurrQty</th>
            <th>NewOrdQty</th>
            <th>AppOrdQty</th>
            <th>Status</th>
            <th>SubmitDate</th>
            <th>StoreLocation</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((data, index) => (
            <tr key={index}>
              <td>{data.skuid}</td>
              <td>{data.product}</td>
              <td>{data.origin}</td>
              <td>{data.price}</td>
              <td>{data.currQty}</td>
              <td>{data.newOrdQty}</td>
              <td>{data.appOrdQty}</td>
              <td>{data.status}</td>
              <td>{data.submitDate}</td>
              <td>{data.storeLocation}</td>
              <td>{data.city}</td>
              <td>
                <Link className="btn btn-primary" to={"/edit/" + data._id}>
                  edit
                </Link>
                <button
                  className="btn btn-danger"
                  href="/"
                  onClick={() => {
                    deleteProduct(data._id);
                  }}
                >
                  delete1
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default StoreOrder;
