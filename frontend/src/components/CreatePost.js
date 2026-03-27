// import { useState } from "react";
// import API from "../api/axios";

// function CreatePost({ fetchPosts }) {
//   const [text, setText] = useState("");
//   const [image, setImage] = useState("");

//   const handlePost = async () => {
//     await API.post("/posts", { text, image });
//     setText("");
//     setImage("");
//     fetchPosts();
//   };

//   return (
//     <div>
//       <textarea placeholder="What's on your mind?" value={text} onChange={(e)=>setText(e.target.value)} />
//       <input placeholder="Image URL" value={image} onChange={(e)=>setImage(e.target.value)} />
//       <button onClick={handlePost}>Post</button>
//     </div>
//   );
// }

// export default CreatePost;
import { useState } from "react";
import API from "../api/axios";

function CreatePost({ fetchPosts }) {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const handlePost = async () => {
    await API.post("/posts", { text, image });
    setText("");
    setImage("");
    fetchPosts();
  };

  return (
    <div style={styles.container}>
      <textarea
        placeholder="What's on your mind?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={styles.textarea}
      />

      <input
        placeholder="Image URL (optional)"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        style={styles.input}
      />

      <button style={styles.button} onClick={handlePost}>
        Post
      </button>
    </div>
  );
}

const styles = {
  container: {
    background: "white",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "20px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  },
  textarea: {
    width: "100%",
    height: "60px",
    marginBottom: "10px"
  },
  input: {
    width: "100%",
    marginBottom: "10px",
    padding: "8px"
  },
  button: {
    backgroundColor: "#1877f2",
    color: "white",
    border: "none",
    padding: "10px",
    cursor: "pointer",
    width: "100%"
  }
};

export default CreatePost;