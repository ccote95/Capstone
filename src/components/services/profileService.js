export const getUserInfoByCurrentUserId = (id) => {
  return fetch(`http://localhost:8000/users?userId=${id}`).then((res) =>
    res.json()
  );
};
