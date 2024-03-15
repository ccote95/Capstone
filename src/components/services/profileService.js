export const getUserInfoByCurrentUserId = (id) => {
  return fetch(`http://localhost:8000/users/${id}?_embed=decks`).then((res) =>
    res.json()
  );
};

export const updateUserInfo = (updatedProfile) => {
  const putOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedProfile),
  };
  return fetch(
    `http://localhost:8000/users/${updatedProfile.id}?_embed=decks`,
    putOptions
  );
};
