/**
 * create the new post view and add the route to application views
 * write the logic for submitting a new post
 * Create the post details view
 * show the post title, format, deck, body, date, comments
 * figure out how to implement a comment section in post details
 * make it so that when i click on a title that i am brought to the posts details view
 
 */

import { useEffect, useState } from "react";
import { getAllPosts } from "../services/postService.js";
import { PostLayout } from "./PostLayout.jsx";
import { PostFilter } from "./PostFilter.jsx";

export const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [filteredFormat, setFilteredFormat] = useState([]);
  const [showFormat, setShowFormat] = useState(0);
  /**gets all posts on initial render and stores them in state */
  useEffect(() => {
    getAllPosts().then((postsObj) => {
      setPosts(postsObj);
    });
  }, []);

  useEffect(() => {
    if (parseInt(showFormat) != 0) {
      const chosenFormat = posts.filter(
        (post) => post.formatId === parseInt(showFormat)
      );
      setFilteredFormat(chosenFormat);
    } else {
      setFilteredFormat(posts);
    }
  }, [showFormat, posts]);
  return (
    <>
      <div>{<PostFilter setShowFormat={setShowFormat} />}</div>
      <div className="post-container">
        <div className="post-card">
          {filteredFormat.map((post) => {
            return <PostLayout post={post} />;
          })}
        </div>
      </div>
    </>
  );
};
