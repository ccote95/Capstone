export const getAllDecks = (id) => {
  return fetch(`http://localhost:8000/decks?userId=${id}`).then((res) =>
    res.json()
  );
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

export const deleteADeck = (deck) => {
  const postOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(deck),
  };
  return fetch(`http://localhost:8000/decks/${deck.id} `, postOptions);
};
