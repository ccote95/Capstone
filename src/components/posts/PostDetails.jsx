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
    <article>
      <section className="post-info">
        <div>{post.title}</div>
        <div>{post.deck?.name}</div>
        <div>{post.format?.name}</div>
        <div>{post.user?.fullName}</div>
      </section>
      <section>
        <div>{post.body}</div>
      </section>
      <section>
        {post.date}
        {currentUser.id === post.userId ? <button>Edit Post</button> : ""}
      </section>
    </article>
  );
};
