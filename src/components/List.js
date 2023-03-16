import { useState } from "react";

import ListCard from "./ListCard";
import ListAddNewForm from "./ListAddNewForm";

import "./List.css";

function List() {
  const [isVisibleForm, toggleFormVisibility] = useState(false);

  let dynamicAddNewTemplate = null;
  if (isVisibleForm) {
    dynamicAddNewTemplate = (
      <ListAddNewForm hideForm={() => toggleFormVisibility(false)} />
    );
  } else {
    dynamicAddNewTemplate = (
      <button className="btn" onClick={() => toggleFormVisibility(true)}>
        Add a card
      </button>
    );
  }

  return (
    <div className="list-container">
      <div className="list-header">Ongoing</div>
      <div className="list-card-items">
        <ListCard text="JS" />
        <ListCard text="CSS" />
        <ListCard text="HTML 5" />
      </div>
      {dynamicAddNewTemplate}
    </div>
  );
}

export default List;
