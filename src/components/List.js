import ListAddNewForm from "./ListAddNewForm";

import "./List.css";
//object destructuring in place of props.

function List({ listItems, headerText, updateListItems }) {
  const createListCard = (cardText, id) => {
    return (
      <button key={id} className="list-card">
        {cardText}
      </button>
    );
  };

  const listCardComponents = listItems.map(createListCard);

  return (
    <div className="list-container">
      <div className="list-header">{headerText}</div>
      <div className="list-card-items">{listCardComponents}</div>
      <ListAddNewForm handleAddCard={updateListItems} />
    </div>
  );
}

export default List;
