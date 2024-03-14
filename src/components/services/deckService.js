export const getAllDecks = () => {
  return fetch("http://localhost:8000/decks").then((res) => res.json());
};

export const addADeck = (deck) => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(deck),
  };
  return fetch(" http://localhost:8000/decks", postOptions);
};
