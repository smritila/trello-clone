import { useState } from "react";

function ListAddNewForm() {
  const [isVisibleForm, toggleFormVisibility] = useState(false);

  let dynamicAddNewTemplate = null;
  if (isVisibleForm) {
    dynamicAddNewTemplate = (
      <div className="add-new-form">
        <textarea
          rows="5"
          placeholder="Enter a little for this card"
        ></textarea>
        <button className="btn-list-card">Add Card</button>
        <button
          className="btn-list-card"
          onClick={() => toggleFormVisibility(false)}
        >
          Cancel
        </button>
      </div>
    );
  } else {
    dynamicAddNewTemplate = (
      <button className="btn" onClick={() => toggleFormVisibility(true)}>
        Add a card
      </button>
    );
  }

  return dynamicAddNewTemplate;
}

export default ListAddNewForm;
