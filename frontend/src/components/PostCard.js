// // import API from "../api/axios";
// // import { useState } from "react";

// // function PostCard({ post, fetchPosts }) {
// //   const [comment, setComment] = useState("");

// //   const handleLike = async () => {
// //     await API.put(`/posts/${post._id}/like`);
// //     fetchPosts();
// //   };

// //   const handleComment = async () => {
// //     await API.put(`/posts/${post._id}/comment`, { text: comment });
// //     setComment("");
// //     fetchPosts();
// //   };

// //   return (
// //     <div style={{border:"1px solid gray", margin:"10px", padding:"10px"}}>
// //       <h4>{post.username}</h4>
// //       <p>{post.text}</p>

// //       {<img src={post.image} alt={post.text || "post image"} width="200" />}

// //       <div>
// //         <button onClick={handleLike}>❤️ {post.likes.length}</button>
// //       </div>

// //       <div>
// //         <input value={comment} onChange={(e)=>setComment(e.target.value)} placeholder="Add comment"/>
// //         <button onClick={handleComment}>Comment</button>
// //       </div>

// //       <p>Comments: {post.comments.length}</p>
// //     </div>
// //   );
// // }

// // export default PostCard;
// import API from "../api/axios";
// import { useState } from "react";

// function PostCard({ post, fetchPosts }) {
//   const [comment, setComment] = useState("");

//   const handleLike = async () => {
//     await API.put(`/posts/${post._id}/like`);
//     fetchPosts();
//   };

//   const handleComment = async () => {
//     if (!comment) return;

//     await API.put(`/posts/${post._id}/comment`, { text: comment });
//     setComment("");
//     fetchPosts();
//   };

//   return (
//     <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      
//       <h4>{post.username}</h4>

//       {/* TEXT */}
//       {post.text && <p>{post.text}</p>}

//       {/* ✅ IMAGE FIX */}
//       {post.image && post.image.trim() !== "" && (
//         <img
//           src={post.image}
//           alt="post"
//           width="200"
//           style={{ marginTop: "10px" }}
//         />
//       )}

//       {/* LIKE */}
//       <div>
//         <button onClick={handleLike}>
//           ❤️ {post.likes.length}
//         </button>
//       </div>

//       {/* COMMENT */}
//       <div>
//         <input
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//           placeholder="Add comment"
//         />
//         <button onClick={handleComment}>Comment</button>
//       </div>

//       <p>Comments: {post.comments.length}</p>
//     </div>
//   );
// }

// // export default PostCard;
// import API from "../api/axios";
// import { useState } from "react";

// function PostCard({ post, fetchPosts }) {
//   const [comment, setComment] = useState("");

//   const handleLike = async () => {
//     await API.put(`/posts/${post._id}/like`);
//     fetchPosts();
//   };

//   const handleComment = async () => {
//     if (!comment) return;
//     await API.put(`/posts/${post._id}/comment`, { text: comment });
//     setComment("");
//     fetchPosts();
//   };

//   return (
//     <div style={styles.card}>
//       <h4>{post.username}</h4>

//       {post.text && <p>{post.text}</p>}

//       {post.image && post.image.trim() !== "" && (
//         <img src={post.image} alt="post" style={styles.image} />
//       )}

//       <div style={styles.actions}>
//         <button onClick={handleLike}>
//           ❤️ {post.likes.length}
//         </button>
//       </div>

//       <div style={styles.commentBox}>
//         <input
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//           placeholder="Write a comment..."
//           style={styles.input}
//         />
//         <button onClick={handleComment}>Post</button>
//       </div>

//       <p style={{ color: "gray" }}>
//         {post.comments.length} comments
//       </p>
//     </div>
//   );
// }

// const styles = {
//   card: {
//     background: "white",
//     padding: "15px",
//     borderRadius: "10px",
//     marginBottom: "15px",
//     boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
//   },
//   image: {
//     width: "100%",
//     borderRadius: "10px",
//     marginTop: "10px"
//   },
//   actions: {
//     marginTop: "10px"
//   },
//   commentBox: {
//     display: "flex",
//     marginTop: "10px"
//   },
//   input: {
//     flex: 1,
//     padding: "8px"
//   }
// };

// export default PostCard;
import API from "../api/axios";
import { useState } from "react";

function PostCard({ post, fetchPosts }) {
  const [comment, setComment] = useState("");

  const handleLike = async () => {
    await API.put(`/posts/${post._id}/like`);
    fetchPosts();
  };

  const handleComment = async () => {
    if (!comment) return;

    await API.put(`/posts/${post._id}/comment`, { text: comment });
    setComment("");
    fetchPosts();
  };

  return (
    <div style={styles.card}>
      
      <h4>{post.username}</h4>

      {post.text && <p>{post.text}</p>}

      {post.image && post.image.trim() !== "" && (
        <img src={post.image} alt="post" style={styles.image} />
      )}

      {/* ❤️ LIKE */}
      <div style={styles.actions}>
        <button onClick={handleLike}>
          ❤️ {post.likes.length}
        </button>
      </div>

      {/* 💬 COMMENTS LIST */}
      {post.comments.length > 0 && (
        <div style={styles.commentsContainer}>
          {post.comments.map((c, index) => (
            <div key={index} style={styles.comment}>
              <strong>{c.username}</strong>: {c.text}
            </div>
          ))}
        </div>
      )}

      {/* ✍️ ADD COMMENT */}
      <div style={styles.commentBox}>
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment..."
          style={styles.input}
        />
        <button onClick={handleComment}>Post</button>
      </div>

    </div>
  );
}

const styles = {
  card: {
    background: "white",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "15px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  },
  image: {
    width: "100%",
    borderRadius: "10px",
    marginTop: "10px"
  },
  actions: {
    marginTop: "10px"
  },

  // 🔥 NEW
  commentsContainer: {
    marginTop: "10px",
    maxHeight: "120px",
    overflowY: "auto",
    background: "#f5f5f5",
    padding: "8px",
    borderRadius: "8px"
  },
  comment: {
    padding: "4px 0",
    fontSize: "14px"
  },

  commentBox: {
    display: "flex",
    marginTop: "10px"
  },
  input: {
    flex: 1,
    padding: "8px"
  }
};

export default PostCard;