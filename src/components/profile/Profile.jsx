import { useEffect, useState } from "react";
import { getUserInfoByCurrentUserId } from "../services/profileService.js";
import "./Profile.css";
import { addADeck } from "../services/deckService.js";
import { useNavigate } from "react-router";

export const Profile = ({ currentUser }) => {
  const [userProfile, setUserProfile] = useState();
  const [showModal, setShowModal] = useState(false);
  const [newDeckName, setNewDeckName] = useState("");
  const navigate = useNavigate();
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

  const handleEditClick = () => {
    navigate(`/profile/${currentUser.id}`);
  };

  return (
    <div className="page-container">
      <div className="profile-container">
        <div className="user-info">
          <label className="flex fullname">
            <h4>Full Name:</h4>
            <div className="user-fullname">{userProfile?.fullName}</div>
          </label>
          <label className="flex age">
            <h4>Age: </h4>

            <div className="user-age"> {userProfile?.age}</div>
          </label>
          <label className="flex email">
            <h4>Email:</h4>
            <div className="user-email"> {userProfile?.email}</div>
          </label>
          <label className="deck-label">Decks:</label>
        </div>
        <div className="user-decks">
          {userProfile?.decks.map((deck) => {
            return (
              <li key={deck.id} className="list-item">
                {deck.name}
              </li>
            );
          })}
        </div>

        <div className="btn-wrapper">
          <div className="edit-profile-btn-container">
            <div className="btn-container">
              <button
                className="edit-profile-btn"
                onClick={() => {
                  handleEditClick();
                }}
              >
                Edit Profile
              </button>
            </div>
            <div className="btn-container">
              <button
                className="add-deck-btn"
                onClick={() => setShowModal(true)}
              >
                Add A Deck
              </button>
            </div>
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
    </div>
  );
};
