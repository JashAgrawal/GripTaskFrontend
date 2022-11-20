import { Link } from "react-router-dom";

function App() {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <h1>Grip Bank</h1>
        </div>
      </div>
      <div class="container text-center m-5">
        <div class="row">
          <div class="col m-2">
            <div class="card text-center">
              <div class="card-header">
                <h1>Transfer Money</h1>
              </div>
              <div class="card-body">
                {/* <h5 class="card-title m-5">Transfer Money</h5> */}
                <p class="card-text">Make transfer Easily between customers</p>
                <Link to="/transfer" class="btn btn-primary">
                  Transfer Money
                </Link>
              </div>
            </div>
          </div>
          <div class="col m-2">
            <div class="card text-center">
              <div class="card-header">
                <h1>View Records</h1>
              </div>
              <div class="card-body">
                {/* <h5 class="card-title m-5">Transfer Money</h5> */}
                <p class="card-text">View Transaction History</p>
                <Link to="/records" aria-disabled class="btn btn-primary">
                  View Records
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { App };
