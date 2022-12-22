import React from "react";
import Card from "../components/card";
import { Bag, PageSlider } from "../components/footer";

export default function Books() {
  const data = [
    {
      id: Math.random(),
      url: "",
      name: "The Psychology of Money",
      author: "Morgan Housel",
      rating: 4,
      quantity: 0,
    },
    {
      id: Math.random(),
      url: "",
      name: "The Psychology of Money",
      author: "Morgan Housel",
      rating: 4,
      quantity: 0,
    },
    {
      id: Math.random(),
      url: "",
      name: "The Psychology of Money",
      author: "Morgan Housel",
      rating: 4,
      quantity: 0,
    },
    {
      id: Math.random(),
      url: "",
      name: "The Psychology of Money",
      author: "Morgan Housel",
      rating: 4,
      quantity: 0,
    },
    {
      id: Math.random(),
      url: "",
      name: "The Psychology of Money",
      author: "Morgan Housel",
      rating: 4,
      quantity: 0,
    },
    {
      id: Math.random(),
      url: "",
      name: "The Psychology of Money",
      author: "Morgan Housel",
      rating: 4,
      quantity: 0,
    },
    {
      id: Math.random(),
      url: "",
      name: "The Psychology of Money",
      author: "Morgan Housel",
      rating: 4,
      quantity: 0,
    },
    {
      id: Math.random(),
      url: "",
      name: "The Psychology of Money",
      author: "Morgan Housel",
      rating: 4,
      quantity: 0,
    },
    {
      id: Math.random(),
      url: "",
      name: "The Psychology of Money",
      author: "Morgan Housel",
      rating: 4,
      quantity: 0,
    },
    {
      id: Math.random(),
      url: "",
      name: "The Psychology of Money",
      author: "Morgan Housel",
      rating: 4,
      quantity: 0,
    },
    
  ];
  const arr = data.map((ele) => {
    return (
      <Card
        key={ele.id}
        id={ele.id}
        url={"https://storage.googleapis.com/bhaumikbucket/id12_post.jpeg"}
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
