import { useEffect, useState } from "react";
import { getCommentsByCurrentUserId } from "../services/commentService.js";
import "./MyComments.css";

export const MyComments = ({ currentUser }) => {
  const [currentUserComments, setCurrentUserComments] = useState([]);

  useEffect(() => {
    if (currentUser) {
      getCommentsByCurrentUserId(parseInt(currentUser.id)).then(
        (userComments) => {
          setCurrentUserComments(userComments);
        }
      );
    }
  }, [currentUser]);

  return (
    <div className="my-comment-container">
      <div className="my-comment-card">
        {currentUserComments.map((comment) => {
          return (
            <div className="comment">
              <label>Post Title:</label>
              <div className="my-comment-post-title">{comment.post?.title}</div>
              <label>Your Comment:</label>
              <div className="my-comment">{comment.body}</div>
              <div className="my-comment-delete-container">
                <button className="my-comment-delete">DELETE</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
