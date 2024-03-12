import { useEffect, useState } from "react";
import { getPostById } from "../services/postService.js";
import { useParams } from "react-router";

export const PostDetails = () => {
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
      <section>
        <div>{post.title}</div>
      </section>
    </article>
  );
};
