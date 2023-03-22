import List from "./components/List";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <List headerText="Ongoing" />
      <List headerText="Delayed" />
      <List headerText="Finished" />
    </div>
  );
}
