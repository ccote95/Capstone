import { useEffect, useState } from "react";

export const MyPosts = ({ currentUser }) => {
  const [currentUserPosts, setCurrentUserPosts] = useState([]);

  useEffect(() => {
    if (currentUser.id > 0) {
    }
  }, []);
};
