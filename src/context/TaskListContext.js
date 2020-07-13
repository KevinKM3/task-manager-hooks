import React, { createContext, useState } from "react";

export const TaskListContext = createContext();

const TaskListContextProvider = () => {
  const [tasks, setTasks] = useState([
    { task: "Read the book", id: 1 },
    { task: "Wash the car", id: 2 },
    { task: "Write some code", id: 3 },
  ]);
  return <div>Task List Context</div>;
};

export default TaskListContextProvider;
