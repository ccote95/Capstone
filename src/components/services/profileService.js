export const getUserInfoByCurrentUserId = (id) => {
  return fetch(`http://localhost:8000/users/${id}?_embed=decks`).then((res) =>
    res.json()
  );
};
