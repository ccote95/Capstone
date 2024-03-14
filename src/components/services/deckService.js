export const getAllDecks = () => {
  return fetch("http://localhost:8000/decks").then((res) => res.json());
};

export const addADeck = (currentUser, deck) => {
  const payload = {
    userId: currentUser.id,
    name: deck,
  };
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  return fetch("http://localhost:8000/decks", postOptions);
};
