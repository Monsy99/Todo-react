import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { StyledForm, StyledInput, Button } from "./styledForm";
import { addTask } from "../tasksSlice";

const Form = () => {
  const [inputContent, setInputContent] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (inputContent.trim() === "") {
      return;
    }
    dispatch(
      addTask({
        content: inputContent,
        done: false,
        id: nanoid(),
      })
    );
    setInputContent("");
  };

  return (
    <StyledForm onSubmit={(event) => onFormSubmit(event)}>
      <StyledInput
        value={inputContent}
        autoFocus
        type="text"
        placeholder="Co jest do zrobienia?"
        onChange={(event) => setInputContent(event.target.value)}
      />
      <Button>Dodaj zadanie</Button>
    </StyledForm>
  );
};

export default Form;
