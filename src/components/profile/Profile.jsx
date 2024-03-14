import { useEffect, useState } from "react";
import { getUserInfoByCurrentUserId } from "../services/profileService.js";
import "./Profile.css";
import { addADeck } from "../services/deckService.js";

export const Profile = ({ currentUser }) => {
  const [userProfile, setUserProfile] = useState();
  const [showModal, setShowModal] = useState(false);
  const [newDeckName, setNewDeckName] = useState("");
  useEffect(() => {
    if (currentUser) {
      getUserInfoByCurrentUserId(parseInt(currentUser.id)).then((profile) => {
        setUserProfile(profile);
      });
    }
  }, [currentUser]);

  const handleAddingNewDeck = () => {
    addADeck(currentUser, newDeckName).then(() => {
      setShowModal(false);
      setNewDeckName("");
      refresh();
    });
  };

  const refresh = () => {
    getUserInfoByCurrentUserId(parseInt(currentUser.id)).then((profile) => {
      setUserProfile(profile);
    });
  };

  return (
    <div className="profile-container">
      <div className="user-info">
        <label className="flex fullname">
          <h4>Full Name:</h4>
          <div className="user-fullname">{userProfile?.fullName}</div>
        </label>
        <label className="flex age">
          <h4>Age</h4>

          <div className="user-age">{userProfile?.age}</div>
        </label>
        <label className="flex">
          <h4>Email:</h4>
          <div className="user-email">{userProfile?.email}</div>
        </label>
        <label>
          Decks
          <button className="add-deck-btn" onClick={() => setShowModal(true)}>
            Add A Deck
          </button>
        </label>
        <div className="user-decks">
          {userProfile?.decks.map((deck) => {
            return <div>{deck.name}</div>;
          })}
        </div>
        <div className="edit-profile-btn-container">
          <button className="edit-profile-btn">Edit Profile</button>
        </div>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h2>Add New Deck</h2>
            <input
              type="text"
              value={newDeckName}
              onChange={(e) => setNewDeckName(e.target.value)}
              placeholder="Enter deck name"
            />
            <button onClick={handleAddingNewDeck}>Add</button>
          </div>
        </div>
      )}
    </div>
  );
};
