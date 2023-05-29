import React, { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default function useReducerA() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const increase = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrease = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <div className="my-10">
      {/* <h2>UseReducer Compo</h2> */}
      <p className="m-4">Count: {state.count}</p>
      <button
        className="px-4 py-2 mr-4 font-semibold text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        onClick={increase}
      >
        Increment
      </button>
      <button
        className="px-4 py-2 mr-4 font-semibold text-blue-500 bg-white border border-blue-500 rounded-md shadow-md hover:text-white hover:bg-blue-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={decrease}
      >
        Decrement
      </button>
    </div>
  );
}
