// import { useState } from "react";
// import API from "../api/axios";
// import { useNavigate } from "react-router-dom";

// function Signup() {
//   const [data, setData] = useState({});
//   const navigate = useNavigate();

//   const handleSubmit = async () => {
//     await API.post("/auth/signup", data);
//     navigate("/login");
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <input placeholder="Username" onChange={(e)=>setData({...data, username:e.target.value})}/>
//       <input placeholder="Email" onChange={(e)=>setData({...data, email:e.target.value})}/>
//       <input type="password" placeholder="Password" onChange={(e)=>setData({...data, password:e.target.value})}/>
//       <button onClick={handleSubmit}>Signup</button>
//     </div>
//   );
// }

// export default Signup;
import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      if (!data.username || !data.email || !data.password) {
        alert("All fields required");
        return;
      }

      console.log("Sending Signup Data:", data);

      // const res = await API.post("/auth/signup", data);
      await API.post("/auth/signup", data);

      alert("Signup Successful ✅");
      navigate("/login");

    } catch (err) {
      console.error("Signup Error:", err.response?.data || err.message);
      alert(err.response?.data || "Signup failed ❌");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Signup</h2>

      <input
        placeholder="Username"
        value={data.username}
        onChange={(e)=>setData({...data, username:e.target.value})}
      />

      <input
        placeholder="Email"
        value={data.email}
        onChange={(e)=>setData({...data, email:e.target.value})}
      />

      <input
        type="password"
        placeholder="Password"
        value={data.password}
        onChange={(e)=>setData({...data, password:e.target.value})}
      />

      <button onClick={handleSubmit}>Signup</button>
    </div>
  );
}

export default Signup;