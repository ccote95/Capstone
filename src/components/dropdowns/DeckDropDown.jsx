export const DeckDropDown = ({ deck }) => {
  return <option value={deck.id}>{deck.name}</option>;
};
