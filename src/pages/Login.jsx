// import { useState } from "react";
// import api from "../api/axios";

// export default function Login() {
//   const [data, setData] = useState({ username: "", password: "" });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await api.post("token/", data);
//       localStorage.setItem("token", res.data.access);
//       alert("Login Successful");
//     } catch {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-40">
//       <input name="username" onChange={(e)=>setData({...data, username:e.target.value})} placeholder="Username" className="w-full p-3 border mb-3"/>
//       <input type="password" name="password" onChange={(e)=>setData({...data, password:e.target.value})} placeholder="Password" className="w-full p-3 border mb-3"/>
//       <button className="w-full bg-indigo-600 text-white p-3">Login</button>
//     </form>
//   );
// }

import { useState } from "react";
import api from "../api/axios";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {

  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("token/", data);
      localStorage.setItem("token", res.data.access);
      alert("Login Successful");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-page">

      <form className="login-form" onSubmit={handleSubmit}>

        <h2>Login to PhiBook</h2>

        <input
          name="username"
          placeholder="Username"
          onChange={(e) =>
            setData({ ...data, username: e.target.value })
          }
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) =>
            setData({ ...data, password: e.target.value })
          }
        />

        <button type="submit">
          Login
        </button>
        <p style={{ textAlign: "center", marginTop: "15px" }}>
  Dont have an account? <Link to="/register">Register here</Link>
</p>

      </form>
     

    </div>
  );
}