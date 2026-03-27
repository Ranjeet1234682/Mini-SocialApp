// import { Link, useNavigate } from "react-router-dom";

// function Navbar() {
//   const navigate = useNavigate();
//   const username = localStorage.getItem("username");

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/login");
//   };

//   return (
//     <div style={styles.navbar}>
//       {/* Logo / Title */}
//       <h2 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
//         SocialApp
//       </h2>

//       {/* Right Side */}
//       <div>
//         {username ? (
//           <>
//             <span style={{ marginRight: "10px" }}>Hi, {username}</span>
//             <button onClick={handleLogout}>Logout</button>
//           </>
//         ) : (
//           <>
//             <Link to="/login" style={styles.link}>Login</Link>
//             <Link to="/signup" style={styles.link}>Signup</Link>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// const styles = {
//   navbar: {
//     display: "flex",
//     justifyContent: "space-between",
//     padding: "10px 20px",
//     backgroundColor: "#282c34",
//     color: "white",
//     alignItems: "center"
//   },
//   link: {
//     marginLeft: "10px",
//     color: "white",
//     textDecoration: "none"
//   }
// };

// export default Navbar;

import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div style={styles.navbar}>
      <h2 onClick={() => navigate("/")}>SocialApp</h2>

      <div>
        {username ? (
          <>
            <span style={styles.user}>Hi, {username}</span>
            <button style={styles.btn} onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/signup" style={styles.link}>Signup</Link>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    backgroundColor: "#1877f2",
    color: "white",
    alignItems: "center"
  },
  user: {
    marginRight: "10px"
  },
  btn: {
    padding: "6px 12px",
    border: "none",
    cursor: "pointer"
  },
  link: {
    marginLeft: "10px",
    color: "white",
    textDecoration: "none"
  }
};

export default Navbar;