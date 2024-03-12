export const getAllPosts = () => {
  return fetch("http://localhost:8000/posts?_expand=format").then((res) =>
    res.json()
  );
};

export const getPostById = (postId) => {
  return fetch(
    ` http://localhost:8000/posts/${postId}?_embed=comments&_expand=format&_expand=deck`
  ).then((res) => res.json());
};

export const getAllFormats = () => {
  return fetch("http://localhost:8000/formats").then((res) => res.json());
};
