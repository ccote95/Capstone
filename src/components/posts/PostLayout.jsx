import { Link } from "react-router-dom";
import "./post.css";

export const PostLayout = ({ post, currentUser }) => {
  return (
    <div className="post">
      <div className="post-title">
        <h3>
          <Link
            to={`/allposts/${post.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            {post.title}
          </Link>
        </h3>
      </div>
      <div className="post-format">{post.format?.name}</div>
      <div className="post-date">{post.date}</div>
      <div>{currentUser ? <button>DELETE</button> : ""}</div>
    </div>
  );
};
