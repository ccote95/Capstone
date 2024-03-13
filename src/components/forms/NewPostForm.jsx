import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getAllFormats, getPostById } from "../services/postService.js";
import { FormatDropDown } from "../posts/FormatDropDown.jsx";

export const NewPostForm = ({ currentUser }) => {
  const [post, setPost] = useState({
    title: "",
    formatId: 0,
    deckId: 0,
    body: "",
    gameOver: false,
    date: "",
  });
  const [format, setFormat] = useState([]);
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

  useEffect(() => {
    getAllFormats().then((formatObj) => {
      setFormat(formatObj);
    });
  }, []);

  return (
    <form>
      <fieldset>
        <div>
          <label>Title</label>
          <input type="text" placeholder="title of post" />
        </div>
        <div>
          <label>Format</label>
          <select>
            <option>Select a Format</option>
            {format.map((formatObj) => {
              return <FormatDropDown format={formatObj} />;
            })}
          </select>
        </div>
      </fieldset>
    </form>
  );
};
