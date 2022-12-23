import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { decre } from "../../logic/actions/cartActions";

export default function FilledCart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.cartData);
  const newArr = cartData.map((item) => {
    return (
      <div style={{ marginTop: "1em" }} key={Math.random()}>
        <div className="filled-unit">
          <div>
            <img
              className="filled-img"
              src={
                "https://storage.googleapis.com/bhaumikbucket/id13_post.jpeg"
              }
            />
            <h1 className="filled-book-title">{item.name}</h1>
          </div>
          <h2 className="filled-book-quantity">x{item.quantity}</h2>
          <h2 className="filled-book-price">Rs. {500}</h2>
          <h2 className="filled-book-price">Rs. {item.quantity * 500}</h2>
          {/* <svg
            onClick={() => dispatch(decre({ ...item, quantity: 1 }))}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="cross"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg> */}
        </div>
      </div>
    );
  });

  return (
    <div className="filled-container">
      <div className="filled-left">
        <div className="filled-heading">
          <h1>Shopping Cart</h1>
          <h2>3 items</h2>
        </div>
        <hr />

        <div className="filled-titles">
          <h3 className="details">PRODUCT DETAILS</h3>
          <h3>QUANTITY</h3>
          <h3>PRICE</h3>
          <h3>TOTAL</h3>
        </div>
        <div className="filled-scrollable">{newArr}</div>
      </div>
      <div className="filled-right">
        <h1>Summary</h1>
        <div>
          <h2>Total:</h2>
          <h2>Rs. 1500</h2>
        </div>
        <div>
          <h2>Discount:</h2>
          <h2>10%</h2>
        </div>
        <div>
          <h2>Shipping:</h2>
          <h2>Rs. 200</h2>
        </div>
        <div className="subtotal">
          <h2>Subtotal:</h2>
          <h2>Rs. 200</h2>
        </div>
        <button>Checkout Items</button>
      </div>
    </div>
  );
}
