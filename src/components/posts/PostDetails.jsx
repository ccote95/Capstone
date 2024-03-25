import { useEffect, useState } from "react";
import { getPostById, updatePost } from "../services/postService.js";
import {
  deleteComment,
  getAllComments,
  submitNewComment,
} from "../services/commentService.js";
import { useNavigate, useParams } from "react-router";

/**when i click submit on the comment i should send the comment to the database
 * comments should get pulled from the database and rendered on initial render
 *
 */

export const PostDetails = ({ currentUser }) => {
  const [post, setPost] = useState([]);
  const { postId } = useParams();
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    reRenderPage();
  }, []);

  useEffect(() => {
    getAllComments().then((comments) => {
      const allComments = comments.filter(
        (comment) => comment.postId === post.id
      );
      setCommentList(allComments);
    });
  }, [post]);

  const reRenderPage = () => {
    getPostById(postId).then((post) => {
      setPost(post);
    });
  };

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    const newComment = {
      userId: currentUser.id,
      postId: post.id,
      body: comment,
      date: new Date().toLocaleString(),
    };
    submitNewComment(newComment).then(() => {
      setComment("");
      reRenderPage();
    });
  };

  const handleEditClick = () => {
    navigate(`/myposts/${post.id}`);
  };
  /**when someone clicks gameover it should switch the value of gameOver from false to true. and remove it from the all posts. but still show in my posts */
  const handleGameOver = () => {
    const gameOverObj = {
      id: post.id,
      userId: currentUser.id,
      title: post.title,
      formatId: parseInt(post.formatId),
      deckId: parseInt(post.deckId),
      gameOver: true,
      body: post.body,
      date: post.date,
    };
    updatePost(gameOverObj).then(() => {
      navigate("/allposts");
    });
  };

  const handleDeleteComment = (comment) => {
    deleteComment(comment).then(() => {
      reRenderPage();
    });
  };
  return (
    <div id="post-details-container">
      <article className="post-details">
        <section className="post-info">
          <div className="post-title">{post.title}</div>
          <div className="post-deck">{post.deck?.name}</div>
          <div className="post-format">{post.format?.name}</div>
          <div className="post-author">{post.user?.fullName}</div>
          <div className="post-info-date">{post.date}</div>
        </section>
        <section className="post-details-body">
          <div>{post.body}</div>
        </section>
        <section>
          {currentUser?.id === post.userId ? (
            <div id="button-container">
              <div className="edit-post">
                <button
                  className="edit-post-btn"
                  onClick={() => {
                    handleEditClick();
                  }}
                >
                  Edit Post
                </button>
              </div>
              <div className="game-over-btn-container">
                {currentUser?.id === post.userId ? (
                  <button className="game-over-btn" onClick={handleGameOver}>
                    Game Over
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          ) : (
            ""
          )}
        </section>
      </article>
      <div className="comment-container">
        <h2 id="comments">Comments</h2>
        {commentList.map((comment) => {
          return (
            <div className="comments" key={comment.id}>
              <div>{comment.user?.fullName}</div>
              <div className="comment-body">{comment.body}</div>
              <div className="comment-date">{comment.date}</div>
              <div>
                {currentUser.id === comment.user?.id ? (
                  <button
                    className="comment-delete"
                    onClick={() => {
                      handleDeleteComment(comment);
                    }}
                  >
                    DELETE
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="main-comment-container">
        <div className="comment-flexbox">
          <h3 className="comment-section-title">Comment</h3>
          <textarea
            className="input-box"
            value={comment}
            onChange={onChangeHandler}
          />
          <button className="comment-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
