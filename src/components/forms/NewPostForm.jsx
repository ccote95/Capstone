import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  createNewPost,
  getAllFormats,
  getPostById,
  updatePost,
} from "../services/postService.js";
import { FormatDropDown } from "../dropdowns/FormatDropDown.jsx";
import { getAllDecks } from "../services/deckService.js";
import { DeckDropDown } from "../dropdowns/DeckDropDown.jsx";
import "./newPostForm.css";

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
  const [deck, setDeck] = useState([]);
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

  useEffect(() => {
    getAllDecks(currentUser.id).then((deckObj) => {
      setDeck(deckObj);
    });
  }, []);

  const handleSave = (e) => {
    e.preventDefault();

    if (postId) {
      const updatedPost = {
        id: post.id,
        userId: currentUser.id,
        title: post.title,
        formatId: parseInt(post.formatId),
        deckId: parseInt(post.deckId),
        gameOver: false,
        body: post.body,
        date: post.date,
      };
      updatePost(updatedPost).then(() => {
        navigate("/myposts");
      });
    } else {
      const newPostObject = {
        userId: currentUser.id,
        title: post.title,
        formatId: parseInt(post.formatId),
        deckId: parseInt(post.deckId),
        gameOver: false,
        body: post.body,
        date: new Date().toLocaleString(),
      };
      createNewPost(newPostObject).then(() => {
        navigate("/allposts");
      });
    }
  };

  return (
    <form className="new-post" onSubmit={handleSave}>
      <fieldset>
        <div>
          <label className="label">Title:</label>
          <input
            required
            value={post.title || ""}
            className="new-post-title"
            type="text"
            placeholder="title of post"
            onChange={(event) => {
              const postCopy = { ...post };
              postCopy.title = event.target.value;
              setPost(postCopy);
            }}
          />
        </div>
        <div>
          <label className="label">Format:</label>
          <select
            value={post.formatId || ""}
            required
            className="new-post-format"
            onChange={(event) => {
              const postCopy = { ...post };
              postCopy.formatId = event.target.value;
              setPost(postCopy);
            }}
          >
            <option>Select a Format</option>
            {format.map((formatObj) => {
              return <FormatDropDown format={formatObj} key={formatObj.id} />;
            })}
          </select>
        </div>
        <div>
          <label className="label">Deck:</label>
          <select
            value={post.deckId || ""}
            required
            className="new-post-deck"
            onChange={(event) => {
              const postCopy = { ...post };
              postCopy.deckId = event.target.value;
              setPost(postCopy);
            }}
          >
            <option>Choose a Deck</option>
            {deck.map((deckObj) => {
              return <DeckDropDown deck={deckObj} key={deckObj.id} />;
            })}
          </select>
        </div>
      </fieldset>
      <fieldset className="new-body-field">
        <div className="body-container">
          <label className="label body">Body: </label>
          <textarea
            value={post.body || ""}
            required
            className="new-post-body"
            onChange={(event) => {
              const postCopy = { ...post };
              postCopy.body = event.target.value;
              setPost(postCopy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        {postId ? (
          <button className="save-post">Save Post</button>
        ) : (
          <button className="submit-post" type="submit">
            Submit Post
          </button>
        )}
      </fieldset>
    </form>
  );
};
