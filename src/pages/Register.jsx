import { useState } from "react";
import api from "../api/axios";
import "./Login.css"; // You can reuse the same CSS as Login

export default function Register() {
  const [data, setData] = useState({ username: "", password: "", email: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("register/", data); // Your backend endpoint for creating a user
      alert("Registration Successful. You can now log in.");
    } catch {
      alert("Registration Failed");
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <input
          name="username"
          placeholder="Username"
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}