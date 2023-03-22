import { useState } from "react";

import ListAddNewForm from "./ListAddNewForm";

import "./List.css";

function List(props) {
  const [cards, setCardList] = useState([]);

  const updateCardList = (newCard) => {
    setCardList([...cards, newCard]);
  };

  const createListCard = (cardText) => {
    return <button className="list-card">{cardText}</button>;
  };

  const listCardComponents = cards.map(createListCard);

  return (
    <div className="list-container">
      <div className="list-header">{props.headerText}</div>
      <div className="list-card-items">{listCardComponents}</div>
      <ListAddNewForm handleAddCard={updateCardList} />
    </div>
  );
}

export default List;
