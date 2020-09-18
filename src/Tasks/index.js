import React from "react";
import "./style.css";

const Tasks = ({ tasks, doneTasksHidden, toggleTaskDone, removeTask }) => {
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
          <button
            className={`task__deleteButton`}
            onClick={() => removeTask(task.id)}
          >
            ✖
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
