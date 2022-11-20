import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Customers from "../Data/Customers.json";
function Transfer() {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3030/api/Auto/Get_All_customers")
      .then((res) => {
        console.log(res.data?.Data);
        setCustomers(res.data?.Data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div class="container text-center ">
        <h1>Customers</h1>
      </div>

      <table class="table table-hover">
        <thead className="sticky-top bg-dark">
          <tr>
            <th scope="col">
              <div class="container text-center ">
                <div class="row">
                  <div class="col text-white">Name</div>
                  <div class="col text-white">Email</div>
                  <div class="col text-white">Available Balance</div>
                  <div class="col text-white">Transfer</div>
                </div>
              </div>
            </th>
            {/* <th scope="col">Email</th>
            <th scope="col">Available Balance</th> */}
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, idx) => (
            <tr>
              <div class="card m-2 rounded border-dark">
                <div class="card-body">
                  <div class="container text-center ">
                    <div class="row">
                      <div class="col m-2 p-2 border-bottom border-top">
                        <h5 class="card-title fonts">{customer.Name}</h5>
                      </div>
                      <div class="col m-2 p-2 border-bottom border-top">
                        <p class="card-text fonts "> {customer.Email}</p>
                      </div>
                      <div class="col m-2 p-2 border-bottom border-top">
                        Rs{" "}
                        <p
                          style={{ display: "inline" }}
                          class="card-text fonts"
                        >
                          {customer.Balance}
                        </p>
                      </div>
                      <div class="col m-2 p-2 border-bottom border-top">
                        <Link
                          to={`/transfer-page/${customer._id}`}
                          class="btn btn-primary"
                        >
                          Transfer
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transfer;
