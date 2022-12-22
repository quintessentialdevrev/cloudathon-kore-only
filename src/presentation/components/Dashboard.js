import { React, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Dashboard() {
  let navigate = useNavigate();
  const [booklist, setBooklist] = useState([
    { id: 0, name: "Book1", price: 1000, quantity: 1 },
    { id: 1, name: "Book2", price: 2000, quantity: 3 },
    { id: 2, name: "Book3", price: 1000, quantity: 3 },
  ]);

  function Proceed() {
    navigate("/");
  }

  return (
    <div>
      {booklist[0] ? (
        <div className="cart-items-1">
          <thead className="cart-items-1-table-head">
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </thead>

          {booklist.map((book) => (
            <tbody>
              <tr className="cart-items-1-table-body">
                <td>{book.name}</td>
                <td>Rs.{book.price}</td>
                <td>X{book.quantity}</td>
              </tr>
            </tbody>
          ))}
          <br />
          <div>
            <button className="cart-items-1-btn" onClick={Proceed}>
              Proceed
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="cart-items-2">
            <p className="cart-items-2-par-1">
              Your cart is
              <br /> empty!
            </p>
            <br />
            <p className="cart-items-2-par-2">
              Looks like you haven’t added
              <br />
              anything to your cart.
            </p>
            <br />
            <br />
            <button className="cart-items-2-btn">Go Back</button>
          </div>
        </>
      )}
    </div>
  );
}
