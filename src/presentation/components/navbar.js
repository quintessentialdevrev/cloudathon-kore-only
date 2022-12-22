import { React, useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [bool, setBool] = useState({
    homeBool: true,
    booksBool: false,
    contactBool: false,
    cartBool: false,
  });
  const navigate = useNavigate();
  const handleTap = (x) => {
    switch (x) {
      case "home": {
        setBool({ homeBool: true, booksBool: false, contactBool: false,cartBool:false });
        break;
      }
      case "books": {
        setBool({ homeBool: false, booksBool: true, contactBool: false ,cartBool:false});
        break;
      }
      case "contact": {
        setBool({ homeBool: false, booksBool: false, contactBool: true,cartBool:false });
        break;
      }
      case "cart": {
        setBool({ homeBool: false, booksBool: false, contactBool: false ,cartBool:true});
        break;
      }
    }
  };
  return (
    <header>
      <h1 className="logo">Bookstore</h1>
      <nav className="nav-right">
        <motion.span
          onTap={() => {
            handleTap("home");
            !bool.homeBool && navigate("/");
          }}
          style={{
            textDecoration: bool.homeBool ? "underline" : "",
            color: bool.homeBool ? "#0058CC" : "",
          }}
        >
          Home
        </motion.span>
        <motion.span
          onTap={() => {
            handleTap("books");
            !bool.booksBool && navigate("/books");
          }}
          style={{
            textDecoration: bool.booksBool ? "underline" : "",
            color: bool.booksBool ? "#0058CC" : "",
          }}
        >
          Books
        </motion.span>
        <motion.span
          onTap={() => {
            handleTap("contact");
            !bool.contactBool && navigate("/contact");
          }}
          style={{
            textDecoration: bool.contactBool ? "underline" : "",
            color: bool.contactBool ? "#0058CC" : "",
          }}
        >
          Contact Us
        </motion.span>
        <motion.span
          onTap={() => {
            handleTap("cart");
            !bool.cartBool && navigate("/cart");
          }}
          style={{
            textDecoration: bool.cartBool ? "underline" : "",
            color: bool.cartBool ? "#0058CC" : "",
          }}
        >
          My Cart
        </motion.span>
      </nav>
    </header>
  );
}
