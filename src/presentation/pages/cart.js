import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { decre } from "../../logic/actions/cartActions";

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
    <div className="cart-container">
      {newArr.length ? (
        <>
          <h1>My Cart</h1>
          <div className="cart-content">
            {newArr}
            <hr />
          </div>
        </>
      ) : (
        <div className="empty-combine">
          <div className="empty-container">
            <h1>
              Oops Your <span>cart</span> is empty!!
            </h1>
            <p>Looks like you haven’t added anything to your cart.</p>
            <button
              onClick={() => {
                navigate("/books");
              }}
            >
              Back To Shopping
            </button>
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
