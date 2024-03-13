import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getPostById } from "../services/postService.js";

export const NewPostForm = () => {
  const [post, setPost] = useState({
    title: "",
    formatId: 0,
    deckId: 0,
    body: "",
    userId: currentUser.id,
    gameOver: false,
    date: "",
  });
  const navigate = useNavigate();
  const { postId } = useParams();
  /**if there is a postId present then get that post by its id,  */
  useEffect(() => {
    if (postId) {
      getPostById(postId).then((postObj) => {
        setPost(postObj);
      });
    }
  }, []);

  return (
    <form>
      <fieldset>
        <div>
          <label>Title</label>
          <input type="text" placeholder="title of post" />
        </div>
      </fieldset>
    </form>
  );
};
