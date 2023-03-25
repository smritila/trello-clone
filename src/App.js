import { useState } from "react";

import List from "./components/List";
import "./App.css";

export default function App() {
  const [taskListMapping, setTaskListMapping] = useState({
    ongoing: [],
    delayed: [],
    finished: [],
  });

  const updateTaskList = (newTask, taskType) => {
    const updatedTaskList = [...taskListMapping[taskType], newTask];
    setTaskListMapping({ ...taskListMapping, [taskType]: updatedTaskList });
  };

  return (
    <div className="App">
      <List
        headerText="Ongoing"
        listItems={taskListMapping.ongoing}
        updateListItems={(newItem) => updateTaskList(newItem, "ongoing")}
      />
      <List
        headerText="Delayed"
        listItems={taskListMapping.delayed}
        updateListItems={(newItem) => updateTaskList(newItem, "delayed")}
      />
      <List
        headerText="Finished"
        listItems={taskListMapping.finished}
        updateListItems={(newItem) => updateTaskList(newItem, "finished")}
      />
    </div>
  );
}
