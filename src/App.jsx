import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "../src/components/products";
import "./App.css";

const App = () => {
  return (
    <>
      <Products />
    </>
  );
};

export default App;
