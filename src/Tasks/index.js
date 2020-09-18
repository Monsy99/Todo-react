import React from "react";
import "./style.css";

const Tasks = ({ tasks, doneTasksHidden, toggleTaskDone }) => {
  return (
    <ul className="tasks">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`task
          ${doneTasksHidden && task.done ? " task--hidden" : ""}
          ${task.done ? " task--done" : ""}`}
        >
          <button
            className={`task__doneButton`}
            onClick={() => toggleTaskDone(task.id)}
          >
            ✔
          </button>
          <p className={`task__content`}>{task.content}</p>
          <button className={`task__deleteButton`}>✖</button>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
