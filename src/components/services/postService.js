export const getAllPosts = () => {
  return fetch("http://localhost:8000/posts").then((res) => res.json());
};
