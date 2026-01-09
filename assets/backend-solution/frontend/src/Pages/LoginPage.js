import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../login.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  function validateForm() {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors({ ...newErrors });
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      console.log("Login successful", { email, password });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>LOGIN</h2>

      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && (
        <span className="error-text">{errors.email}</span>
      )}

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors.password && (
        <span className="error-text">{errors.password}</span>
      )}

      <button type="submit">LOGIN</button>

      <p>
        Don’t have an account?{" "}
        <NavLink to="/register">Sign up</NavLink>
      </p>
    </form>
  );
}

