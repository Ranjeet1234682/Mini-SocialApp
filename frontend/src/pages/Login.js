// import { useState } from "react";
// import API from "../api/axios";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [data, setData] = useState({});
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     const res = await API.post("/auth/login", data);
//     localStorage.setItem("token", res.data.token);
//     localStorage.setItem("username", res.data.user.username);
//     navigate("/");
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input placeholder="Email" onChange={(e)=>setData({...data, email:e.target.value})}/>
//       <input type="password" placeholder="Password" onChange={(e)=>setData({...data, password:e.target.value})}/>
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }

// export default Login;

import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // ✅ validation
      if (!data.email || !data.password) {
        alert("Please fill all fields");
        return;
      }

      console.log("Sending Data:", data); // debug

      const res = await API.post("/auth/login", data);

      // ✅ save token & username
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.user.username);

      alert("Login Successful ✅");

      navigate("/");
    } catch (err) {
      console.error("Login Error:", err.response?.data || err.message);

      // ✅ proper error message
      if (err.response?.status === 404) {
        alert("User not found ❌");
      } else if (err.response?.status === 400) {
        alert("Wrong password ❌");
      } else {
        alert("Something went wrong ❌");
      }
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={data.email}
        onChange={(e) =>
          setData({ ...data, email: e.target.value })
        }
        style={{ display: "block", margin: "10px auto", padding: "8px" }}
      />

      <input
        type="password"
        placeholder="Password"
        value={data.password}
        onChange={(e) =>
          setData({ ...data, password: e.target.value })
        }
        style={{ display: "block", margin: "10px auto", padding: "8px" }}
      />

      <button
        onClick={handleLogin}
        style={{ padding: "10px 20px", cursor: "pointer" }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;