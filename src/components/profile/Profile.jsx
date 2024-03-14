import { useEffect, useState } from "react";
import { getUserInfoByCurrentUserId } from "../services/profileService.js";

export const Profile = ({ currentUser }) => {
  const [userProfile, setUserProfile] = useState();

  useEffect(() => {
    if (currentUser) {
      getUserInfoByCurrentUserId(parseInt(currentUser.id)).then((profile) => {
        setUserProfile(profile);
      });
    }
  }, [currentUser]);

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
          <button className="add-deck-btn">Add A Deck</button>
        </div>
        <div className="edit-profile-btn-container">
          <button className="edit-profile-btn">Edit Profile</button>
        </div>
      </div>
    </div>
  );
};
