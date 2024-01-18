// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "../src/components/products";
import SingleProduct from "./components/SingleProduct";
import Login from "./components/Login"; // Assuming you have a Login component
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
          <Route path="/login" element={<Login />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
