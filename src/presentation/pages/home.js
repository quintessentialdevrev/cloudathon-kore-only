import React from "react";
import Searchbar from "../components/searchbar";
import { ReactComponent as HomeIllu } from "../assets/home-illu-1.svg";

export default function Home() {
  return (
    <main className="home-container">
      <div className="home-hero">
        <div className="home-left">
          <h1>Find Your Book...</h1>
          <svg
            width="161"
            height="37"
            viewBox="0 0 161 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="line-vector"
          >
            <path
              d="M1 19.1738C109.471 -17.2172 159 19.1738 159 19.1738C159 19.1738 91.7659 -6.43428 27.6695 34"
              stroke="#EF9600"
              strokeWidth="5"
            />
          </svg>
          <p>
            Over our vast variety of books find the ones that resonate with you
            and buy them for Rs. 500 each.
          </p>
          <Searchbar />
        </div>
        <div className="home-right">
          <HomeIllu className="home-illu" />
        </div>
      </div>
      <div className="home-description">
        <div>
          <h1>Fast Delivery</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div>
          <h1>Authentic collection</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div>
          <h1>24/7 Customer Service</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
    </main>
  );
}
