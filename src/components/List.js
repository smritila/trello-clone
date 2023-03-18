import { useState } from "react";

import ListCard from "./ListCard";
import ListAddNewForm from "./ListAddNewForm";

import "./List.css";

function List() {
  const [cardList, updateCardList] = useState([
    "html",
    "css",
    "js",
    "python",
    "php",
  ]);

  const createListCard = (cardText) => {
    return <ListCard text={cardText} />;
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
