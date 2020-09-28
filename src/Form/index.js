import React, { useState } from "react";
import { StyledForm, StyledInput, Button } from "./styledForm";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim() === "") {
      return;
    }
    addNewTask(newTaskContent);
    setNewTaskContent("");
  };

  return (
    <StyledForm onSubmit={(event) => onFormSubmit(event)}>
      <StyledInput
        value={newTaskContent}
        autoFocus
        type="text"
        placeholder="Co jest do zrobienia?"
        onChange={(event) => setNewTaskContent(event.target.value)}
      />
      <Button>Dodaj zadanie</Button>
    </StyledForm>
  );
};

export default Form;
