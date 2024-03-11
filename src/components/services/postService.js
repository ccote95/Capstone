export const getAllPosts = () => {
  return fetch("http://localhost:8000/posts?_expand=format").then((res) =>
    res.json()
  );
};
