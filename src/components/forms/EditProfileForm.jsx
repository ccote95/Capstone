import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import {
  getUserInfoByCurrentUserId,
  updateUserInfo,
} from "../services/profileService.js";
import { deleteADeck } from "../services/deckService.js";
import "./editProfileForm.css";

/**need a function to delete the selected deck
 * need to make it so that when one is deleted the page rerenders
 * need to make the delete button
 *
 */

export const EditProfile = ({ currentUser }) => {
  const [userProfile, setUserProfile] = useState();
  const [selectedDeck, setSelectedDeck] = useState({ id: null, name: "" });
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (userId) {
      getUserInfoByCurrentUserId(userId).then((user) => {
        setUserProfile(user);
      });
    }
  }, [userId]);

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
  };
  const handleSaveProfile = (e) => {
    e.preventDefault();
    const updateProfile = {
      id: currentUser.id,
      fullName: userProfile.fullName,
      age: userProfile.age,
      email: userProfile.email,
      isStaff: userProfile.isStaff,
    };
    updateUserInfo(updateProfile).then(() => {
      navigate("/profile");
    });
  };
  return (
    <form onSubmit={handleSaveProfile} className="edit-form">
      <fieldset>
        <div id="form">
          <label>Full Name:</label>
          <input
            required
            value={userProfile?.fullName || ""}
            type="text"
            onChange={(event) => {
              const userCopy = { ...userProfile };
              userCopy.fullName = event.target.value;
              setUserProfile(userCopy);
            }}
          />
        </div>
        <div id="form">
          <label>Age:</label>
          <input
            className="age-input"
            required
            value={userProfile?.age || ""}
            type="text"
            onChange={(event) => {
              const userCopy = { ...userProfile };
              userCopy.age = event.target.value;
              setUserProfile(userCopy);
            }}
          />
        </div>
        <div id="form">
          <label>Email:</label>

          <input
            className="email-input"
            required
            size="30"
            value={userProfile?.email || ""}
            type="text"
            onChange={(event) => {
              const userCopy = { ...userProfile };
              userCopy.email = event.target.value;
              setUserProfile(userCopy);
            }}
          />
        </div>
      </fieldset>
      <fieldset key={userProfile?.decks.id}>
        <label id="form">Deck List:</label>
        {userProfile?.decks.map((deck) => {
          return (
            <div key={deck.id}>
              <input
                type="radio"
                name="deck"
                value={deck.id}
                onChange={handleRadioChange}
                checked={selectedDeck.id === deck.id}
              ></input>
              <label>{deck.name}</label>
            </div>
          );
        })}
      </fieldset>
      <div id="btn-container">
        <div className="delete-btn">
          <button
            id="delete-btn"
            onClick={() => {
              handleDeletingDeck();
            }}
            type="button"
          >
            Delete A Deck
          </button>
        </div>

        <div className="save-btn">
          <button id="save-btn" type="submit">
            Save Profile
          </button>
        </div>
      </div>
    </form>
  );
};
