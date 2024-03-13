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
