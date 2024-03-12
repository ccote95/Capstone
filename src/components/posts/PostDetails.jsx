import { useEffect, useState } from "react";
import { getPostById } from "../services/postService.js";
import { useParams } from "react-router";

export const PostDetails = ({ currentUser }) => {
  const [post, setPost] = useState([]);
  const { postId } = useParams();
  const [comment, setComment] = useState("");

  useEffect(() => {
    reRenderPage();
  }, []);

  const reRenderPage = () => {
    getPostById(postId).then((post) => {
      setPost(post);
    });
  };

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  return (
    <div>
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
            <div className="edit-post">
              <button className="edit-post-btn">Edit Post</button>
            </div>
          ) : (
            ""
          )}
        </section>
      </article>
      <div className="main-comment-container">
        <div className="comment-container">{comment}</div>
        <div className="comment-flexbox">
          <h3>Comment</h3>
          <textarea className="input-box" onChange={onChangeHandler} />
          <button className="comment-btn">Submit</button>
        </div>
      </div>
    </div>
  );
};
