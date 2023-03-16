function ListAddNewForm(props) {
  return (
    <div className="add-new-form">
      <textarea rows="5" placeholder="Enter a little for this card"></textarea>
      <button className="btn-list-card">Add Card</button>
      <button className="btn-list-card" onClick={props.hideForm}>
        Cancel
      </button>
    </div>
  );
}

export default ListAddNewForm;
