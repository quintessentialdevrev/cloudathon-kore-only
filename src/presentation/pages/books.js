import React from "react";
import Card from "../components/card";
import { Bag, PageSlider } from "../components/footer";

export default function Books() {
  const data = [
    {
      url: "",
      name: "The Psychology of Money",
      author: "Morgan Housel",
      rating: 4,
    },
    {
      url: "",
      name: "The Psychology of Money",
      author: "Morgan Housel",
      rating: 4,
    },
    {
      url: "",
      name: "The Psychology of Money",
      author: "Morgan Housel",
      rating: 4,
    },
    {
      url: "",
      name: "The Psychology of Money",
      author: "Morgan Housel",
      rating: 4,
    },
    {
      url: "",
      name: "The Psychology of Money",
      author: "Morgan Housel",
      rating: 4,
    },
    {
      url: "",
      name: "The Psychology of Money",
      author: "Morgan Housel",
      rating: 4,
    },
    {
      url: "",
      name: "The Psychology of Money",
      author: "Morgan Housel",
      rating: 4,
    },
    {
      url: "",
      name: "The Psychology of Money",
      author: "Morgan Housel",
      rating: 4,
    },
    {
      url: "",
      name: "The Psychology of Money",
      author: "Morgan Housel",
      rating: 4,
    },
    {
      url: "",
      name: "The Psychology of Money",
      author: "Morgan Housel",
      rating: 4,
    },
  ];
  const arr = data.map((ele) => {
    return (
      <Card
        key={Math.random()}
        name={ele.name}
        author={ele.author}
        rating={ele.rating}
      />
    );
  });
  return (
    <div className="books-container">
      <div className="books">{arr}</div>
      <div className="books-footer">
        <PageSlider />
        <Bag />
      </div>
    </div>
  );
}
