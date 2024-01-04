import React from "react";
import { Link } from "react-router-dom";
import { TbShoppingCart } from "react-icons/tb";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { FaHome, FaReact } from "react-icons/fa";

const iconStyle = {
  verticalAlign: "middle",
  marginRight: "3px",
  color: "#61DBFB",
};

export default function Nav() {
  return (
    <nav className="nav flex-container">
      <h1 className="mainHeader">
        LaMoureaux{" "}
        <FaReact style={{ verticalAlign: "middle", color: "#61DBFB" }} />
      </h1>
      <div className="search-bar">
        <input type="text" placeholder="Search for products..." />
        <button>Search</button>
      </div>
      <div className="navigation-menu">
        <h3 className="links">
          <a href="/#" className="nav-link">
            <FaHome className="icon" style={iconStyle} /> Home
          </a>
          <a href="/#" className="nav-link">
            <IoMdLogIn className="icon" style={iconStyle} /> Login
          </a>
          <a href="/#" className="nav-link">
            <IoPersonSharp className="icon" style={iconStyle} /> Account
          </a>
          <a href="/#" className="nav-link">
            <TbShoppingCart className="icon" style={iconStyle} /> Cart
          </a>
        </h3>
      </div>
    </nav>
  );
}
