import React from "react";
import SiblingA from "./SiblingA";
import SiblingB from "./SiblingB";
import { MyContextProvider } from "../contexts/contextA";

export default function Parent() {
  return (
    <MyContextProvider>
      <div className="flex m-4">
        <SiblingA />
        <SiblingB />
      </div>
    </MyContextProvider>
  );
}
