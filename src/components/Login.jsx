import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = ({ setLoggedInUser }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = sessionStorage.getItem("jwtToken");
    if (storedToken) {
      // You may want to decode the token and check its expiration here
      setLoginSuccess(true);
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const { token } = await response.json();
        console.log("JWT:", token);
        console.log("Login successful");

        // Save the token in sessionStorage
        // sessionStorage.setItem("jwtToken", token);
        localStorage.setItem("jwtToken", token);

        const loggedInUser = {
          username: formData.username,
        };

        // sessionStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
        setLoggedInUser(loggedInUser);
        setLoginSuccess(true);

        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const resetLoginSuccess = () => {
    // sessionStorage.removeItem("loggedInUser");
    localStorage.removeItem("loggedInUser");
    setLoginSuccess(false);
  };

  const testLogins = [
    { username: "johnd", password: "m38rmF$" },
    { username: "donero", password: "ewedon" },
    { username: "jimmie_k", password: "klein*#%*" },
  ];

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form>
          <label>Username:</label>
          <input type="text" name="username" onChange={handleInputChange} />
          <label>Password:</label>
          <input type="password" name="password" onChange={handleInputChange} />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
        {loginSuccess && (
          <p className="success-message" onClick={resetLoginSuccess}>
            Login Successful!
          </p>
        )}
        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>

      <div className="test-login-card">
        <h3>Test Logins</h3>
        {testLogins.map((login, index) => (
          <p key={index}>
            Test User {index + 1}: {login.username} / {login.password}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Login;
