import React from "react";

const App = () => {
  return <div>{Umair("Bio amla")}</div>;
};

export default App;

const Umair = Product => {
  if (Product === "Sunsilk") {
    let a = "2";
    let b = "Pakistan";

    return `Id is: ${a} And Manufacturer is ${b}`;
  } else {
    return "No Product Found";
  }
};
