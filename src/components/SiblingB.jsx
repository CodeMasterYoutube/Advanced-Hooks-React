import React, { useContext } from "react";
import { MyContext } from "../contexts/contextA";

export default function SiblingB() {
  //   const data = useContext(MyContext);
  const { price } = useContext(MyContext);

  return (
    <div className="w-1/2 border border-3 border-red-500">
      <h1 className="m-2 p-2">child B, price: {price} bucks!</h1>
    </div>
  );
}
