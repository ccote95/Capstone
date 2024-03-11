import { useEffect, useState } from "react";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const localMtgUser = localStorage.getItem("mtg_user");
    const mtgUserObj = JSON.parse(localMtgUser);
    setCurrentUser(mtgUserObj);
  }, []);
};
