import  { useEffect, useState } from "react";
import "../styles/dashboard.css";

function UserDashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/posts/")
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div className="dashboard">
      <h2>My Dashboard</h2>

      <div className="dashboard-grid">
        {posts.map(post => (
          <div className="post-card" key={post.id}>
            {post.image && <img src={post.image} alt="post" />}
            <p>{post.text}</p>

            <div className="post-actions">
              <button className="like-btn">❤️ {post.total_likes}</button>
              <button className="comment-btn">💬 Comment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserDashboard;