import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCommentsByUserId } from "../services/commentService.js";
import { getUserInfoByCurrentUserId } from "../services/profileService.js";
import { deleteADeck } from "../services/deckService.js";

/**need a function to delete the selected deck
 * need to make it so that when one is deleted the page rerenders
 * need to make the delete button
 *
 */

export const EditProfile = ({ currentUser }) => {
  const [userProfile, setUserProfile] = useState({
    id: currentUser.id,
    fullName: "",
    age: 0,
    email: "",
    deckId: 0,
    isStaff: false,
  });
  const [selectedDeck, setSelectedDeck] = useState({ id: null, name: "" });
  const { userId } = useParams();

  useEffect(() => {
    if (userId) {
      getUserInfoByCurrentUserId(userId).then((user) => {
        setUserProfile(user);
      });
    }
  }, []);

  const reRenderPage = () => {
    if (userId) {
      getUserInfoByCurrentUserId(userId).then((user) => {
        setUserProfile(user);
      });
    }
  };

  const handleRadioChange = (e) => {
    const deckId = parseInt(e.target.value);
    const deck = userProfile?.decks.find((deck) => deck.id === deckId);
    const deckName = deck ? deck.name : "";
    setSelectedDeck({ id: deckId, name: deckName || "" });
  };

  const handleDeletingDeck = () => {
    deleteADeck(selectedDeck).then(() => {
      reRenderPage();
    });

    const handleSaveProfile = () => {
      const updateProfile = {
        id: currentUser.id,
        fullName: userProfile.fullName,
        age: userProfile.age,
        email: userProfile.email,
        isStaff: userProfile.isStaff,
      };
    };
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
      <button
        onClick={() => {
          handleDeletingDeck();
        }}
        type="button"
      >
        DELETE
      </button>
      <div>
        <button>Save Profile</button>
      </div>
    </form>
  );
};
