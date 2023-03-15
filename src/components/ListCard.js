import "./ListCard.css";

function ListCard(props) {
  return <button className="list-card">{props.text}</button>;
}

export default ListCard;
