import { React, useState } from "react";
import Card from "../components/card";
import { Bag, PageSlider } from "../components/footer";
import { useSelector } from "react-redux";

export default function Books() {
  const data = useSelector((state) => state.allData);
  const [bounds, setBounds] = useState([0, 9]);
  const newArr = data.filter((ele, index) => {
    return bounds[0] <= index && bounds[1] >= index;
  });
  const arr = newArr.map((ele) => {
    return (
      <Card
        key={ele.id}
        id={ele.id}
        url={"https://storage.googleapis.com/bhaumikbucket/id12_post.jpeg"}
        name={ele.name}
        author={ele.author}
        rating={ele.rating}
        quantity={ele.quantity}
      />
    );
  });
  return (
    <div className="books-container">
      <div className="books">{arr}</div>
      <div className="books-footer">
        <PageSlider bounds={bounds} setBounds={setBounds} />
        <Bag />
      </div>
    </div>
  );
}
