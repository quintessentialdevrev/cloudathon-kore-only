import { React, useState } from "react";
import Counter from "../components/counter";

export default function Cart() {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="cart-container">
      <h1>My Cart</h1>
      <div className="cart-content">
        <div className="cart-unit">
          <img
            className="cart-img"
            src={"https://storage.googleapis.com/bhaumikbucket/id13_post.jpeg"}
          />
          <h2 className="cart-book-title">
            The Psychology of Money jhjh hjhggh
          </h2>
          <Counter
            quantity={quantity}
            setQuantity={setQuantity}
            size={"5"}
          />
          <h2>Rs. 500</h2>
        </div>
      </div>
    </div>
  );
}
