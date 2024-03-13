export const getAllPosts = () => {
  return fetch("http://localhost:8000/posts?_expand=format").then((res) =>
    res.json()
  );
};

export const getPostById = (postId) => {
  return fetch(
    `  http://localhost:8000/posts/${postId}?_embed=comments&_expand=format&_expand=deck&_expand=user`
  ).then((res) => res.json());
};

export const getAllFormats = () => {
  return fetch("http://localhost:8000/formats").then((res) => res.json());
};

export const createNewPost = (newPost) => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  };
  return fetch("http://localhost:8000/posts", postOptions);
};

export const updatePost = (updatedPost) => {
  const updateOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedPost),
  };
  return fetch(`http://localhost:8000/posts/${updatedPost.id}`, updateOptions);
};
