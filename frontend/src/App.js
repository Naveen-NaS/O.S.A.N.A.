import React from "react";
import "./App.css"; // Import CSS files or global stylesheets if needed
import Carousel from "./components/carousel";
import Telepromter from "./components/telepromter";

function App(props) {
  return (
    <>
      <Carousel />
      <Telepromter />
    </>
  );
}

export default App;
