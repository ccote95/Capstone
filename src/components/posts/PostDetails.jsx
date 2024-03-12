import { useEffect, useState } from "react";
import { getPostById } from "../services/postService.js";
import { useParams } from "react-router";

export const PostDetails = ({ currentUser }) => {
  const [post, setPost] = useState([]);
  const { postId } = useParams();

  useEffect(() => {
    reRenderPage();
  }, []);

  const reRenderPage = () => {
    getPostById(postId).then((post) => {
      setPost(post);
    });
  };

  return (
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
  );
};
