import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "../src/components/products";
import SingleProduct from "./components/SingleProduct";
import Login from "./components/Login";
import "./App.css";
import Nav from "./components/Nav";
import Cart from "./components/Cart";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  return (
    <Router>
      <>
        <Nav loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
        <Routes>
          <Route
            path="/"
            element={
              <Products
                addToCart={addToCart}
                loggedInUser={loggedInUser}
                cartItems={cartItems}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <SingleProduct cartItems={cartItems} addToCart={addToCart} />
            }
          />
          <Route
            path="/login"
            element={<Login setLoggedInUser={setLoggedInUser} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                loggedInUser={loggedInUser}
                setCartItems={setCartItems} // Pass setCartItems here
                removeFromCart={removeFromCart}
              />
            }
          />
        </Routes>
      </>
    </Router>
  );
};

export default App;
