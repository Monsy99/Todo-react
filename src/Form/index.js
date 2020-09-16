import React from "react";
import "./style.css"

const Form = () => (
    <form className="form">
        <input autoFocus className="form__input" type="text" placeholder="Co jest do zrobienia?"/>
        <button className="form__newTaskButton">Dodaj zadanie</button>
    </form>
)

export default Form;