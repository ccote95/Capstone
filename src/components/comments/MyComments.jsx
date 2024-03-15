import { useEffect, useState } from "react";
import {
  deleteComment,
  getCommentsByCurrentUserId,
} from "../services/commentService.js";
import "./MyComments.css";

export const MyComments = ({ currentUser }) => {
  const [currentUserComments, setCurrentUserComments] = useState([]);

  useEffect(() => {
    if (currentUser) {
      getCommentsByCurrentUserId(parseInt(currentUser.id)).then(
        (userComments) => {
          const foundComments = userComments.filter(
            (comments) => comments.post.gameOver === false
          );
          setCurrentUserComments(foundComments);
        }
      );
    }
  }, [currentUser]);

  const renderPageAfterDelete = () => {
    getCommentsByCurrentUserId(parseInt(currentUser.id)).then(
      (userComments) => {
        setCurrentUserComments(userComments);
      }
    );
  };

  const handleDelete = (comment) => {
    deleteComment(comment).then(() => {
      renderPageAfterDelete();
    });
  };

  return (
    <>
      <div className="my-comment-title">
        <h1>My Comments</h1>
      </div>
      <div className="my-comment-container">
        <div className="my-comment-card">
          {currentUserComments.map((comment) => {
            return (
              <div className="comment" key={comment.id}>
                <label>Post Title:</label>
                <div className="my-comment-post-title">
                  {comment.post?.title}
                </div>
                <label>Your Comment:</label>
                <div className="my-comment">{comment.body}</div>
                <div className="my-comment-delete-container">
                  <button
                    className="my-comment-delete"
                    onClick={() => {
                      handleDelete(comment);
                    }}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
