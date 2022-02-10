import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from "react";

export default function Recharge() {
  const keyRef = useRef();
  const amountRef = useRef();
  const idRef = useRef();
  const transactionRef = useRef();
  const recharge = async (event) => {
    event.preventDefault();
    console.log(event);
    alert("Debugger");
    const res = await fetch("api/recharge", {
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
    <div className="card">
      <div className="card-body">
        <form action="/api/Recharge" method="post">
          <div className="form-group pt-2">
            <input
              type="password"
              className="form-control"
              placeholder="Key"
              ref={keyRef}
              name="key"
              required
            ></input>
            <input
              type="text"
              className="form-control mt-2"
              placeholder="User ID"
              ref={idRef}
              name="user_id"
              required
            ></input>
             <input
              type="text"
              className="form-control mt-2"
              placeholder="Transaction ID"
              name="transaction_id"
              ref={transactionRef}
              required
            ></input>
            <div className="form-row">
              <label htmlFor="exampleFormControlSelect1">Select Amount</label>
              <select className="form-control" name="amount" ref={amountRef} required>
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
