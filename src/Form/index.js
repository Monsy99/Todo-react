import React, { useState } from "react";
import "./style.css";

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
    <form className="form" onSubmit={(event) => onFormSubmit(event)}>
      <input
        value={newTaskContent}
        autoFocus
        className="form__input"
        type="text"
        placeholder="Co jest do zrobienia?"
        onChange={(event) => setNewTaskContent(event.target.value)}
      />
      <button className="form__newTaskButton">Dodaj zadanie</button>
    </form>
  );
};

export default Form;
