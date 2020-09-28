import React from "react";
import { ButtonsContainer, Button } from "./styledButtons";

const Buttons = ({
  tasks,
  setDoneTasksHidden,
  doneTasksHidden,
  setAllTasksDone,
}) => {
  if (tasks.length === 0) {
    return null;
  } else {
    return (
      <ButtonsContainer>
        <Button onClick={() => setDoneTasksHidden(!doneTasksHidden)}>
          {doneTasksHidden ? "Pokaż ukończone" : "Ukryj ukończone"}
        </Button>

        <Button
          disabled={tasks.every((task) => task.done)}
          onClick={setAllTasksDone}
        >
          Ukończ wszystkie
        </Button>
      </ButtonsContainer>
    );
  }
};

export default Buttons;
