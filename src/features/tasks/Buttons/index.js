import React from "react";
import { ButtonsContainer, Button } from "./styledButtons";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();
  if (tasks.length === 0) {
    return null;
  } else {
    return (
      <ButtonsContainer>
        <Button
          onClick={() => {
            dispatch(toggleHideDone());
          }}
        >
          {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
        </Button>

        <Button
          disabled={tasks.every((task) => task.done)}
          onClick={() => {
            dispatch(setAllDone());
          }}
        >
          Ukończ wszystkie
        </Button>
      </ButtonsContainer>
    );
  }
};

export default Buttons;
