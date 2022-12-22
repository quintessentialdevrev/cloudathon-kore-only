import { React, useState } from "react";
import Star from "./star";
import { motion } from "framer-motion";
import Counter from "./counter";
import { useDispatch } from "react-redux";
import { incre } from "../../logic/actions/cartActions";

export default function Modal({
  id,
  url,
  name,
  author,
  rating,
  setBool,
  quantity,
}) {
  const dispatch = useDispatch();
  const h = 25;
  // const [quantity, setQuantity] = useState(0);

  return (
    <motion.div
      className="modal-container"
      initial={{ opacity: 0.5, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.2 }}
    >
      <div className="modal-rel-box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="cross"
          onClick={() => {
            setBool(false);
          }}
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
        <div className="modal-content">
          <img className="modal-img" src={url} />
          {/* <img className="modal-img" src={require("../assets/book-1.png")} /> */}
          <div className="modal-right">
            <h2>{name}</h2>
            <h3>{author}</h3>
            <div>
              <Star h={h} />
              <Star h={h} />
              <Star h={h} />
              <Star h={h} />
              <Star h={h} />
            </div>
            <h3 className="genre-title">Genre: </h3>
            <div className="modal-genres">
              <div className="genre">Finance</div>
              <div className="genre">Philosopy</div>
              <div className="genre">Educational</div>
            </div>

            {quantity ? (
              <Counter quantity={quantity} id={id} />
            ) : (
              <button
                onClick={() => {
                  dispatch(incre({ id, quantity }));
                }}
              >
                Add To Cart
              </button>
            )}
            <h4>Reviews</h4>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
