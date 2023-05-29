import React, { useReducer, useState } from "react";
const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "DELETE_ITEM":
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
};

export default function useReducerB() {
  const [inputVal, setInputVal] = useState({ content: "" });
  const [state, dispatch] = useReducer(taskReducer, []);
  const addTask = (newTask) => {
    // {content : Wake up at 6 , id: 12345}
    //Date.now()
    const newTaskWithID = { content: newTask, id: Date.now() };
    dispatch({ type: "ADD_ITEM", payload: newTaskWithID });
  };
  const deleteTask = (id) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
  };
  const handleChange = (e) => {
    setInputVal({ ...inputVal, content: e.target.value });
  };
  return (
    <>
      <div className="flex my-4">
        <div className="w-1/2 border border-3 border-red-500">
          <input
            id="input"
            type="text"
            className="m-4 border border-gray-300 rounded-md py-2 px-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your item here ..."
            value={inputVal.content}
            onChange={handleChange}
          />
          <button
            className="px-4 py-2 font-semibold text-blue-500 bg-white border border-blue-500 rounded-md shadow-md hover:text-white hover:bg-blue-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={() => {
              inputVal.content && addTask(inputVal);
              setInputVal({ ...inputVal, content: "" });
            }}
          >
            add item
          </button>
        </div>
        <div className="w-1/2 border border-3 border-red-500">
          {state.map((value, index) => (
            <div
              key={index}
              className="flex justify-between border border-blue-500 m-1"
            >
              <h2 className="py-2 m-1 block ">{value.content.content}</h2>
              <button
                className="px-1 py-2 m-1 font-semibold text-blue-500 bg-white border border-blue-500 rounded-md shadow-md hover:text-white hover:bg-blue-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                onClick={() => deleteTask(value.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
