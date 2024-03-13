export const getAllDecks = () => {
  return fetch("http://localhost:8000/decks").then((res) => res.json());
};
