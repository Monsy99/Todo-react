import React from "react";
import "./style.css";

const Buttons = ({ tasks, setDoneTasksHidden, doneTasksHidden }) => {
  if (tasks.length === 0) {
    return null;
  } else {
    return (
      <div className={`buttons`}>
        <button
          className="buttons__functionButton"
          onClick={() => setDoneTasksHidden(!doneTasksHidden)}
        >
          {doneTasksHidden ? "Pokaż ukończone" : "Ukryj ukończone"}
        </button>

        <button
          disabled={tasks.find((task) => !task.done)}
          className="buttons__functionButton"
        >
          Ukończ wszystkie
        </button>
      </div>
    );
  }
};

export default Buttons;
