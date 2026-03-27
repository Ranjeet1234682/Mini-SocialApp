// import { useEffect, useState } from "react";
// import API from "../api/axios";
// import PostCard from "../components/PostCard";
// import CreatePost from "../components/CreatePost";
// import { useNavigate } from "react-router-dom";

// function Feed() {
//   const [posts, setPosts] = useState([]);
//   const navigate = useNavigate();

//   const fetchPosts = async () => {
//     try {
//       const res = await API.get("/posts");
//       setPosts(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     // 🔐 agar login nahi hai → login page
//     if (!token) {
//       navigate("/login");
//     } else {
//       fetchPosts();
//     }
//   }, []);

//   return (
//     <div style={{ maxWidth: "600px", margin: "auto" }}>
//       <h2 style={{ textAlign: "center" }}>Social Feed</h2>

//       <CreatePost fetchPosts={fetchPosts} />

//       {posts.length === 0 ? (
//         <p>No posts yet...</p>
//       ) : (
//         posts.map((post) => (
//           <PostCard
//             key={post._id}
//             post={post}
//             fetchPosts={fetchPosts}
//           />
//         ))
//       )}
//     </div>
//   );
// }

// export default Feed;

import { useEffect, useState } from "react";
import API from "../api/axios";
import PostCard from "../components/PostCard";
import CreatePost from "../components/CreatePost";
import { useNavigate } from "react-router-dom";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchPosts = async () => {
    try {
      const res = await API.get("/posts");
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    } else {
      fetchPosts();
    }
  }, [navigate]);

  return (
    <div style={styles.container}>
      
      <h2 style={styles.heading}>Social Feed</h2>

      <CreatePost fetchPosts={fetchPosts} />

      {/* 🔄 Loading State */}
      {loading ? (
        <p style={styles.message}>Loading posts...</p>
      ) : posts.length === 0 ? (
        <p style={styles.message}>No posts yet...</p>
      ) : (
        posts.map((post) => (
          <PostCard
            key={post._id}
            post={post}
            fetchPosts={fetchPosts}
          />
        ))
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "20px auto",
    padding: "10px"
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px"
  },
  message: {
    textAlign: "center",
    color: "gray"
  }
};

export default Feed;