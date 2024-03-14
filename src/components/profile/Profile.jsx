import { useEffect, useState } from "react";
import { getUserInfoByCurrentUserId } from "../services/profileService.js";

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

  const handleAddingNewDeck = () => {};

  return (
    <div className="profile-container">
      <div className="user-info">
        <label>Full Name</label>
        <div className="user-fullname">{userProfile?.fullName}</div>
        <label>Age</label>
        <div className="user-age">{userProfile?.age}</div>
        <label>Email</label>
        <div className="user-email">{userProfile?.email}</div>
        <label>Decks</label>
        <div className="user-decks">
          {userProfile?.deck.name}
          <button className="add-deck-btn" onClick={() => setShowModal(true)}>
            Add A Deck
          </button>
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
