import { React, useState } from "react";
import Modal from "./modal";
import Star from "./star";
import { AnimatePresence } from "framer-motion";

export default function Card({ id, url, name, author, rating, quantity }) {
  const [bool, setBool] = useState(false);
  const handleClick = () => {
    setBool(true);
  };
  return (
    <>
      <AnimatePresence mode="wait">
        {bool && (
          <Modal
            id={id}
            url={url}
            name={name}
            author={author}
            rating={rating}
            quantity ={quantity}
            setBool={setBool}
          />
        )}
      </AnimatePresence>
      <div className="unit-container" onClick={handleClick}>
        <img className="img" src={url} />
        {/* <img className="img" src={require("../assets/book-1.png")} /> */}
        <h2>{name}</h2>
        <h3>{author}</h3>
        <div>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
      </div>
    </>
  );
}
