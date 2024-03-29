export const submitNewComment = (newComment) => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newComment),
  };
  return fetch("http://localhost:8000/comments", postOptions);
};

export const getAllComments = () => {
  return fetch(`http://localhost:8000/comments/?_expand=user`).then((res) =>
    res.json()
  );
};

export const getCommentsByUserId = (id) => {
  return fetch(`http://localhost:8000/comments?userId=${id}`).then((res) =>
    res.json()
  );
};

export const deleteComment = (comment) => {
  const postOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  };
  return fetch(`http://localhost:8000/comments/${comment.id}`, postOptions);
};

export const getCommentsByCurrentUserId = (id) => {
  return fetch(`http://localhost:8000/comments?userId=${id}&_expand=post`).then(
    (res) => res.json()
  );
};
