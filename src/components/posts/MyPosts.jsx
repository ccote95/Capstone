import { useEffect, useState } from "react";
import { getCommentsByUserId } from "../services/commentService.js";
import { getCurrentUserPosts } from "../services/postService.js";

export const MyPosts = ({ currentUser }) => {
  const [currentUserPosts, setCurrentUserPosts] = useState([]);

  useEffect(() => {
    if (currentUser) {
      getCurrentUserPosts(parseInt(currentUser.id)).then((userPosts) => {
        setCurrentUserPosts(userPosts);
      });
    }
  }, [currentUser]);
};
