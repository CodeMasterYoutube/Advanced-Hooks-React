import React, { useContext } from "react";
import { MyContext } from "../contexts/contextA";

export default function SiblingA() {
  const { setPrice } = useContext(MyContext);
  return (
    <div className=" flex w-1/2 border border-3 border-red-500">
      <h1 className="m-2 p-2">Child A</h1>
      <button
        className="px-4 py-2 m-1 font-semibold text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        onClick={() => setPrice((price) => 99 * price)}
      >
        {" "}
        Change your sibling's price
      </button>
    </div>
  );
}
