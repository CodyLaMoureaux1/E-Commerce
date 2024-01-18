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
    <nav className="nav">
      <div className="logo-container">
        <h1 className="logo">
          LaMoureaux <FaReact style={iconStyle} />
        </h1>
      </div>

      <div className="links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/login" className="nav-link">
          Login
        </Link>
        <Link to="/account" className="nav-link">
          Account
        </Link>
        <Link to="/cart" className="nav-link">
          <TbShoppingCart className="icon" style={iconStyle} />
          Cart
        </Link>
      </div>
    </nav>
  );
}
