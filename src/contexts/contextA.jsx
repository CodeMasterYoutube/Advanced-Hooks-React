import { createContext, useState } from "react";

export const MyContext = createContext();
export const MyContextProvider = ({ children }) => {
  const a = "Hello Guys!";
  //   const sum = (x) => x + x;
  const [price, setPrice] = useState(100);

  const contextValue = {
    a,
    price,
    setPrice,
  };
  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
