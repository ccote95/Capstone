import { useEffect, useState } from "react";
import { getCurrentUserPosts } from "../services/postService.js";
import { PostLayout } from "./PostLayout.jsx";

export const MyPosts = ({ currentUser }) => {
  const [currentUserPosts, setCurrentUserPosts] = useState([]);

  useEffect(() => {
    if (currentUser) {
      getCurrentUserPosts(parseInt(currentUser.id)).then((userPosts) => {
        setCurrentUserPosts(userPosts);
      });
    }
  }, [currentUser]);

  return (
    <>
      <div className="myposts-title">
        <h1>My Posts</h1>
      </div>
      <div className="post-container">
        <div className="post-card">
          {currentUserPosts.map((post) => {
            return (
              <PostLayout post={post} key={post.id} currentUser={currentUser} />
            );
          })}
        </div>
      </div>
    </>
  );
};
