import React from "react";
import Dasboard from "../components/Dashboard"
import logo from "../assets/cart-logo.svg";

export default function cart() {
   
  return (
    <>
      <div className="Cart-header">
          My Cart
      </div>
      <div className="cart-body">
         <div>
            <Dasboard/>
         </div>
         <div>
         <img src={logo} alt="" className="Cart-logo" />
         </div>
       </div>
    </>
  );
}
