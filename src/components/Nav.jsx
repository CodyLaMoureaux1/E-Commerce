import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { IoMdLogIn, IoMdPerson, IoMdHome } from "react-icons/io";
import { FaReact } from "react-icons/fa";

const Nav = ({ loggedInUser, setLoggedInUser }) => {
  const cookies = new Cookies();
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedInUser(null);

    cookies.remove("loggedInUser");

    navigate("/login");

    console.log("Logout successful");
  };

  return (
    <nav className="nav">
      <div className="logo-container">
        <h1 className="logo">
          LaMoureaux{" "}
          <FaReact
            style={{
              verticalAlign: "middle",
              marginRight: "3px",
              color: "#61DBFB",
            }}
          />
        </h1>
      </div>

      <div className="links">
        <Link to="/" className="nav-link">
          <IoMdHome className="icon" />
          Home
        </Link>

        {loggedInUser ? (
          <>
            <span>Hello, {loggedInUser.username}!</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login" className="nav-link">
            <IoMdLogIn className="icon" />
            Login
          </Link>
        )}

        <Link to="/cart" className="nav-link">
          <IoMdPerson className="icon" />
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
