import { useEffect, useState } from "react";
import { getUserInfoByCurrentUserId } from "../services/profileService.js";

export const Profile = () => {
  const [userProfile, setUserProfile] = useState();

  useEffect(() => {
    getUserInfoByCurrentUserId(
      parseInt(currentUser.id).then((profile) => {
        setUserProfile(profile);
      })
    );
  }, []);
};
