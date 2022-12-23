import React from "react";
import { useSelector } from "react-redux";

export default function PlaceOrder() {
  const cartData = useSelector((state) => state.cartData);
  const newArr = cartData.map((ele) => {
    return { id: ele.id, quantity: ele.id };
  });
  const handleClick = async () => {
    try {
      const res = await fetch(
        "http://127.0.0.1:5001/cloud-a-thon/us-central1/app/placeOrder",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: [
              { id: 1, quantity: 3 },
              { id: 2, quantity: 1 },
            ],
          }),
        }
      );
      if (res.ok) {
        const output = await res.json();
        console.log(output.url);
        window.location = output.url;
      } else {
        const failedURL = await res.json();
        Promise.reject(failedURL);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <button onClick={handleClick}>PlaceOrder</button>
    </div>
  );
}

// button.addEventListener("click", () => {
//   fetch("http://localhost:3000/create-checkout-session", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       items: [
//         { id: 1, quantity: 3 },
//         { id: 2, quantity: 1 },
//       ],
//     }),
//   })
//     .then((res) => {
//       if (res.ok) return res.json();
//       return res.json().then((json) => Promise.reject(json));
//     })
//     .then(({ url }) => {
//       window.location = url;
//     })
//     .catch((e) => {
//       console.error(e.error);
//     });
// });
