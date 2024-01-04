import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "../src/components/products";
import SingleProduct from "./components/SingleProduct";
import "./App.css";
import Nav from "./components/Nav";

const App = () => {
  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
