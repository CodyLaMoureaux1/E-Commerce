import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loginSuccess, setLoginSuccess] = useState(false); // New state for login success message
  const navigate = useNavigate();

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

        // Set login success state to true
        setLoginSuccess(true);

        // Redirect to the home page after a delay
        setTimeout(() => {
          navigate("/");
        }, 2000); // 2000 milliseconds (2 seconds) delay
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const resetLoginSuccess = () => {
    setLoginSuccess(false);
  };

  // Test login information
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
            Login Successful! Returning to home...
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
