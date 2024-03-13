import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getAllFormats, getPostById } from "../services/postService.js";
import { FormatDropDown } from "../dropdowns/FormatDropDown.jsx";
import { getAllDecks } from "../services/deckService.js";
import { DeckDropDown } from "../dropdowns/DeckDropDown.jsx";

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
        <div>
          <label>Deck</label>
          <select>
            <option>Choose a Deck</option>
            {deck.map((deckObj) => {
              return <DeckDropDown deck={deckObj} />;
            })}
          </select>
        </div>
      </fieldset>
    </form>
  );
};
