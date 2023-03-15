import ListCard from "./ListCard";

import "./List.css";

function List() {
  return (
    <div className="list-container">
      <div className="list-header">Ongoing</div>
      <div className="list-card-items">
        <ListCard text="JS" />
        <ListCard text="CSS" />
        <ListCard text="HTML 5" />
      </div>
      <button className="btn">Add a card</button>
    </div>
  );
}

export default List;
