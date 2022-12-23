import React from "react";
import "./styles/app.css";
import "./styles/nav.css";
import "./styles/home.css";
import "./styles/books.css";
import "./styles/cart.css";
import "./styles/modal.css";
import "./styles/hamburg.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Books from "./pages/books";
import ContactUs from "./pages/contactUs";
import Cart from "./pages/cart";
import PlaceOrder from "./pages/placeOrder";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/books" element={<Books />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/placeOrder" element={<PlaceOrder />} />
        {/* <Home /> */}
      </Routes>
    </Router>
  );
}
