import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "../src/components/products";
import "./App.css";
import Nav from "./components/Nav";

const App = () => {
  return (
    <>
      <Nav />
      <Products />
    </>
  );
};

export default App;
