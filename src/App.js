import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import List from "./components/List";
import "./App.css";

export default function App() {
  const [statusToTaskListMapping, setTaskListMapping] = useState({
    ongoing: [],
    delayed: [],
    finished: [],
  });

  const createNewTaskObject = (text) => {
    return {
      id: `${+new Date()}`,
      text: text,
    };
  };

  const updateTaskList = (newTask, status) => {
    const updatedTaskList = [
      ...statusToTaskListMapping[status],
      createNewTaskObject(newTask),
    ];
    setTaskListMapping({
      ...statusToTaskListMapping, // object spreading
      [status]: updatedTaskList,
    });
  };

  return (
    <DragDropContext>
      <div className="App">
        <List
          listId="ongoing"
          headerText="Ongoing"
          listItems={statusToTaskListMapping["ongoing"]}
          updateListItems={(newItem) => updateTaskList(newItem, "ongoing")}
        />
        <List
          listId="delayed"
          headerText="Delayed"
          listItems={statusToTaskListMapping["delayed"]}
          updateListItems={(newItem) => updateTaskList(newItem, "delayed")}
        />
        <List
          listId="finished"
          headerText="Finished"
          listItems={statusToTaskListMapping["finished"]}
          updateListItems={(newItem) => updateTaskList(newItem, "finished")}
        />
      </div>
    </DragDropContext>
  );
}
