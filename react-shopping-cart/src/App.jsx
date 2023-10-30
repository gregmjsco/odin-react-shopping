import React, { useState } from "react";
import Header from "./components/Header/Header";

const App = () => {
  const [heading, setHeading] = useState("Magnificent Monkeys");

  const clickHandler = () => {
    setHeading("Radical Rhinos");
  };

  return (
    <>
      <Header />
      <button type="button" onClick={clickHandler}>
        Click Me
      </button>
      <h1>{heading}</h1>
    </>
  );
};

export default App;