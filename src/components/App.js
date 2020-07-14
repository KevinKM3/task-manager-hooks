import React from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import Header from "./Header";
import TaskListContextProvider from "../context/TaskListContext";

import "../App.css";

const App = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <div className="main">
            <Header />
            <TaskList />
            <TaskForm />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
};

export default App;
