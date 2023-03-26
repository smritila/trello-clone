import ListAddNewForm from "./ListAddNewForm";
import { Droppable, Draggable } from "react-beautiful-dnd";

import "./List.css";
//object destructuring in place of props.

function List({ listId, listItems, headerText, updateListItems }) {
  const getItemClasses = (isDragging) => {
    let defaultClasses = ["list-card"];
    if (isDragging) {
      defaultClasses.push("list-card--dragging");
    }
    return defaultClasses.join(" ");
  };

  const createDraggableListItem = (item, idx) => {
    return (
      <Draggable key={item.id} draggableId={item.id} index={idx}>
        {(provided, snapshot) => (
          <button
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={getItemClasses(snapshot.isDragging)}
            style={{ ...provided.draggableProps.style }}
          >
            {item.text}
          </button>
        )}
      </Draggable>
    );
  };

  return (
    <div className="list-container">
      <div className="list-header">{headerText}</div>
      <Droppable droppableId={listId}>
        {(provided, snapshot) => (
          <div ref={provided.innerRef} className="list-card-items">
            {listItems.map(createDraggableListItem)}
          </div>
        )}
      </Droppable>
      <ListAddNewForm handleAddCard={updateListItems} />
    </div>
  );
}

export default List;
