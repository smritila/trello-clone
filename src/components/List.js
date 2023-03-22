import { useState } from "react";

import ListAddNewForm from "./ListAddNewForm";

import "./List.css";

function List() {
  const [cardList, updateCardList] = useState(["html", "css", "js"]);

  const createListCard = (cardText) => {
    return <button className="list-card">{cardText}</button>;
  };

  const listCardComponents = cardList.map(createListCard);

  return (
    <div className="list-container">
      <div className="list-header">Ongoing</div>
      <div className="list-card-items">{listCardComponents}</div>
      <ListAddNewForm />
    </div>
  );
}

export default List;
