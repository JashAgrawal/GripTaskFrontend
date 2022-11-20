import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function TransferPage() {
  const { id } = useParams();
  const [details, setDetails] = useState({
    Name: "Jash",
    Email: "Jash@gmail.com",
    Balance: 5000,
  });
  const [toId, setToId] = useState(0);
  const [amount, setAmount] = useState();
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3030/api/Auto/Get_By_Id_customers" + "/" + id)
      .then((res) => {
        console.log(res.data?.Data);
        setDetails(res.data?.Data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3030/api/Auto/Get_All_customers")
      .then((res) => {
        // console.log(res.data?.Data);
        setCustomers(res.data?.Data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleTransfer = () => {
    const toName = customers.filter((customer) => customer._id === toId)[0]
      ?.Name;
    if (toId == "" || toId == 0) {
      alert("Please Select A Sender");
    } else {
      if (amount > parseInt(details.Balance)) {
        alert("Not Enough Balance");
      } else {
        axios
          .post("http://localhost:3030/api/Auto/Update_customers", {
            fromId: id,
            toId: toId,
            amount: parseInt(amount),
            fromName: details.Name,
            toName: toName,
          })
          .then((res) => {
            alert("Transaction Succesfull");
            // window.location.reload();
          })
          .catch((err) => {
            alert("Something Went Wrong");
          });
      }
    }
  };
  return (
    <div>
      <div class="container rounded border-dark">
        <div class="container-lg p-5 m-auto rounded border-dark">
          <div class="card m-2 rounded border-dark">
            <div class="container text-center">
              <h1 className="border-bottom p-2 m-2">Transfer Form</h1>
              <div class="row border-bottom p-2 m-2">
                <div class="col fonts">Name</div>
                <div class="col fonts">Email</div>
                <div class="col fonts">Balance</div>
              </div>
              <div class="row border-bottom p-2 m-2">
                <div class="col ">{details.Name}</div>
                <div class="col">{details.Email}</div>
                <div class="col">{details.Balance}</div>
              </div>
              <div class="container text-center m-2">
                <h1>TO</h1>
                <select
                  class="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example"
                  required
                  value={toId}
                  onChange={(e) => {
                    setToId(e.target.value);
                  }}
                >
                  <option selected value={0}>
                    Open this select menu
                  </option>
                  {customers
                    .filter((customer) => customer._id !== id)
                    .map((c, i) => (
                      <option value={c._id}>
                        <div class="container text-center">
                          <div class="row border-bottom p-2 m-2">
                            <div class="col ms-5">{c.Name}</div>
                          </div>
                        </div>
                      </option>
                    ))}
                </select>
                <div class="input-group mb-3">
                  <span class="input-group-text">Rs</span>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Dollar amount (with dot and two decimal places)"
                    value={amount}
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                  />
                </div>
                <button
                  onClick={handleTransfer}
                  type="button"
                  class="btn btn-success m-2"
                >
                  Transfer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransferPage;
