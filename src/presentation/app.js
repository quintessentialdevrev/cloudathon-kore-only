import React from "react";
import "./styles/app.css";
import "./styles/nav.css";
import "./styles/home.css";
import "./styles/books.css";
import "./styles/cart.css";
import "./styles/dashboard.css";
import "./styles/modal.css";
import "./styles/addcart.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Books from "./pages/books";
import ContactUs from "./pages/contactUs";
import Cart from "./pages/cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCart from "./pages/addCart";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/books" element={<Books />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/addCart" element={<AddCart/>} />
        {/* <Home /> */}
      </Routes>
    </Router>
  );
}
