/**this is to render all of the posts in the database. a user should only see a posts title and the format. but when they click the title of a post it should bring you to the post details view
 * im going to need to get all posts and store them in state.
 * i will need to map the posts
 * create another module for the layout of a post
 */

import { useEffect, useState } from "react";
import { getAllPosts } from "../services/postService.js";

export const AllPosts = () => {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    getAllPosts().then((postsObj) => {
      setPosts(postsObj);
    });
  }, []);
  return <div>all posts</div>;
};
