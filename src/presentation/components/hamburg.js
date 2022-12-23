import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hamburg() {
  const navigate = useNavigate();
  const [bool, setBool] = useState(false);
  return (
    <div className="hamburg-container">
      <svg
        onClick={() => {
          setBool((prev) => !prev);
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="menu-svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      {bool && (
        <div className="dropdown">
          <h1
            onClick={() => {
              navigate("/");
              setBool(false);
            }}
          >
            Home
          </h1>
          <h1
            onClick={() => {
              navigate("/books");
              setBool(false);
            }}
          >
            Books
          </h1>
          <h1
            onClick={() => {
              navigate("/cart");
              setBool(false);
            }}
          >
            My Cart
          </h1>
          <h1
            onClick={() => {
              navigate("/contact");
              setBool(false);
            }}
          >
            Contact Us
          </h1>
        </div>
      )}
    </div>
  );
}
