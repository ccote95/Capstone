import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCommentsByUserId } from "../services/commentService.js";
import { getUserInfoByCurrentUserId } from "../services/profileService.js";

/**need a function to delete the selected deck
 * need to make it so that when one is deleted the page rerenders
 * need to make the delete button
 *
 */

export const EditProfile = ({ currentUser }) => {
  const [userProfile, setUserProfile] = useState();
  const [selectedDeck, setSelectedDeck] = useState({ id: null, name: "" });
  const { userId } = useParams();

  useEffect(() => {
    if (userId) {
      getUserInfoByCurrentUserId(userId).then((user) => {
        setUserProfile(user);
      });
    }
  }, []);

  const handleRadioChange = (e) => {
    const deckId = parseInt(e.target.value);
    const deck = userProfile?.decks.find((deck) => deck.id === deckId);
    const deckName = deck ? deck.name : "";
    setSelectedDeck({ id: deckId, name: deckName || "" });
  };
  return (
    <form>
      <fieldset>
        <div>
          <label>Full Name:</label>
          <input required value={userProfile?.fullName || ""} type="text" />
        </div>
        <div>
          <label>Age:</label>
          <input required value={userProfile?.age} text="text" />
        </div>
        <div>
          <label>Email:</label>
          <input required value={userProfile?.email} type="text" />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label>Deck List:</label>
          {userProfile?.decks.map((deck) => {
            return (
              <>
                <input
                  type="radio"
                  name="deck"
                  value={deck.id}
                  onChange={handleRadioChange}
                ></input>
                {deck.name}
              </>
            );
          })}
        </div>
      </fieldset>
    </form>
  );
};
