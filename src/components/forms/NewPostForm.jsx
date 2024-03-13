import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  createNewPost,
  getAllFormats,
  getPostById,
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
    getAllDecks().then((deckObj) => {
      setDeck(deckObj);
    });
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    const newPostObject = {
      userId: currentUser.id,
      title: post.title,
      formatId: post.formatId,
      deckId: post.deckId,
      body: post.body,
      date: new Date().toLocaleDateString(),
    };
    createNewPost(newPostObject).then(() => {
      navigate("/allposts");
    });
  };

  return (
    <form className="new-post" onSubmit={handleSave}>
      <fieldset>
        <div>
          <label>Title:</label>
          <input
            required
            value={post.title}
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
          <label>Format:</label>
          <select
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
          <label>Deck:</label>
          <select
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
        <label>Body</label>
        <textarea
          required
          className="new-post-body"
          onChange={(event) => {
            const postCopy = { ...post };
            postCopy.body = event.target.value;
            setPost(postCopy);
          }}
        />
      </fieldset>
      <fieldset>
        <button className="submit-post" type="submit">
          Submit Post
        </button>
      </fieldset>
    </form>
  );
};
