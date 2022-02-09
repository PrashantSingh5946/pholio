import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from "react";

export default function Recharge() {
  const keyRef = useRef();
  const amountRef = useRef();
  const idRef = useRef();
  const transactionRef = useRef();
  const registerUser = async (event) => {
    event.preventDefault();

    const res = await fetch("http://riviatech.eastus.cloudapp.azure.com:1337/recharge", {
      body: JSON.stringify({
        key: keyRef.current.value,
        amount: amountRef.current.value,
        id: idRef.current.value,
        transactionId: transactionRef.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    // result.user => 'Ada Lovelace'
  };

  return (
    <div class="card">
      <div class="card-body">
        <form onSubmit={(e) => {registerUser(e)}}>
          <div className="form-group pt-2">
            <input
              type="password"
              className="form-control"
              placeholder="Key"
              ref={keyRef}
              required
            ></input>
            <input
              type="text"
              className="form-control mt-2"
              placeholder="User ID"
              ref={idRef}
              required
            ></input>
             <input
              type="text"
              className="form-control mt-2"
              placeholder="Transaction ID"
              ref={transactionRef}
              required
            ></input>
            <div className="form-row">
              <label for="exampleFormControlSelect1">Select Amount</label>
              <select className="form-control" ref={amountRef} required>
                <option>25</option>
                <option>50</option>
                <option>100</option>
                <option>250</option>
                <option>450</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            Recharge
          </button>
        </form>
      </div>
    </div>
  );
}
