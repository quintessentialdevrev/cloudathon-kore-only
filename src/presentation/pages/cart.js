import { React, useState } from "react";
import Counter from "../components/counter";
import { useSelector } from "react-redux";

export default function Cart() {
  const cartData = useSelector((state) => state.cartData);
  const newArr = cartData.map((item) => {
    return (
      <div className="cart-unit">
        <img
          className="cart-img"
          src={"https://storage.googleapis.com/bhaumikbucket/id13_post.jpeg"}
        />
        <h2 className="cart-book-title">{item.name}</h2>
        <h2 className="cart-book-quantity">x{item.quantity}</h2>
        <h2 className="cart-book-price">Rs. {item.quantity*500}</h2>
      </div>
    );
  });
  return (
    <div className="cart-container">
      <h1>My Cart</h1>
      <div className="cart-content">{newArr}</div>
    </div>
  );
}
