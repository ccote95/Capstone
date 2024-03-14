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



  return()
};
