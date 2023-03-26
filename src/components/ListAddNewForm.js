import { useState, useEffect, useRef } from "react";

function ListAddNewForm(props) {
  const [isVisibleForm, toggleFormVisibility] = useState(false);
  const [newText, setNewText] = useState("");

  const inputRef = useRef(null);

  const focusTextInput = () => {
    inputRef.current.focus();
  };

  const addNewCard = () => {
    props.handleAddCard(newText);
    setNewText("");
    focusTextInput();
  };

  useEffect(() => {
    if (!isVisibleForm) setNewText("");
    else focusTextInput();
  }, [isVisibleForm]);

  let dynamicAddNewTemplate = null;

  if (isVisibleForm) {
    dynamicAddNewTemplate = (
      <div className="add-new-form">
        <textarea
          ref={inputRef}
          rows="5"
          placeholder="Enter a little for this card"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
        <button className="btn-list-card" onClick={addNewCard}>
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
