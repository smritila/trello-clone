import { useState, useEffect } from "react";

function ListAddNewForm(props) {
  const [isVisibleForm, toggleFormVisibility] = useState(false);
  const [newText, setNewText] = useState("");

  useEffect(() => {
    if (!isVisibleForm) setNewText("");
  }, [isVisibleForm]);

  let dynamicAddNewTemplate = null;
  if (isVisibleForm) {
    dynamicAddNewTemplate = (
      <div className="add-new-form">
        <textarea
          rows="5"
          placeholder="Enter a little for this card"
          onInput={(e) => setNewText(e.target.value)}
        >
          {newText}
        </textarea>
        <button
          className="btn-list-card"
          onClick={() => props.handleAddCard(newText)}
        >
          Add Card
        </button>
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
