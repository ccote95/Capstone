export const getUserInfoByCurrentUserId = (id) => {
  return fetch(`http://localhost:8000/users/${id}?_expand=deck`).then((res) =>
    res.json()
  );
};
