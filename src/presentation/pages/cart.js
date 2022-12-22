import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { decre } from "../../logic/actions/cartActions";
import FilledCart from "../components/filledCart";

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.cartData);
  const newArr = cartData.map((item) => {
    return (
      <div style={{ marginTop: "1em" }} key={Math.random()}>
        <hr />
        <div className="cart-unit">
          <img
            className="cart-img"
            src={"https://storage.googleapis.com/bhaumikbucket/id13_post.jpeg"}
          />
          <h2 className="cart-book-title">{item.name}</h2>
          <h2 className="cart-book-quantity">x{item.quantity}</h2>
          <h2 className="cart-book-price">Rs. {item.quantity * 500}</h2>
          <svg
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
          </svg>
        </div>
      </div>
    );
  });
  return (
    // <div className="cart-container"><FilledCart /></div>
    <div className="cart-container">
      {cartData.length ? (
        <FilledCart />
      ) : (
        <div className="empty-combine">
          <div className="empty-container">
            <h1>
              Oops Your <span>cart</span> is empty!!
            </h1>
            <p>Looks like you haven’t added anything to your cart.</p>
            <div
              className="empty-link"
              onClick={() => {
                navigate("/books");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="arrow"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              <p>Continue Shopping</p>
            </div>
          </div>
          <img
            className="empty-illu"
            src="https://cdn.discordapp.com/attachments/1053692777470378016/1055491646785077278/Group_10.png"
          />
        </div>
      )}
    </div>
  );
}
