import { React, useState } from "react";
import Modal from "./modal";
import Star from "./star";

export default function Card({ name, author, rating }) {
  const [bool, setBool] = useState(false);
  const handleClick = () => {
    setBool(true);
  };
  return (
    <>
      {bool && (
        <Modal name={name} author={author} rating={rating} setBool={setBool} />
      )}
      <div className="unit-container" onClick={handleClick}>
        <img className="img" src={"https://storage.googleapis.com/bhaumikbucket/id1_post.jpeg"} />
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
