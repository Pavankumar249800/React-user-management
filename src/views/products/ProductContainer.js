import React, { useEffect, useState } from "react";
import Sidebar from "../../components/partials/Sidebar";

const ProductContainer = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const userDataNew =
      JSON.parse(localStorage.getItem("userData")) || undefined;
    setUserData(userDataNew.permissions);
    console.log("userDataNew", userDataNew);
    console.log("userData", userData);
  }, []);

  console.log("userData", userData);

  return (
    <div className="dashboard">
      <div className="container">
        <div className="row">
          <div className="col-3 mt-3">
            <Sidebar />
          </div>
          <div className="col-9 mt-3">
            <div>
              <div className="float-left">
                {" "}
                <h2>Product Lists</h2>
              </div>

              {typeof userData != "undefined" &&
                userData.includes("add_product") && (
                  <div className="float-right">
                    <button className="btn btn-success"> + New Product</button>
                  </div>
                )}

              <div className="clearfix"></div>
            </div>

            {typeof userData != "undefined" &&
              userData.includes("view_product") && (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Samsung Gallaxy J7</td>
                      <td>16,000</td>
                      <td>
                        <button className="btn btn-success mr-2">Edit</button>
                        <button className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Iphone 6+</td>
                      <td>65,000</td>
                      <td>
                        <button className="btn btn-success mr-2">Edit</button>
                        <button className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}

            {typeof userData === "undefined" ||
              (!userData.includes("view_product") && (
                <div className="alert alert-danger">
                  <strong>Sorry !! You are not permitted to view this</strong>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
