import React from "react";
import "./style.css"

const Buttons = (props) => {
    if(props.tasks.length === 0){
    return null;
    }
    else{
    return <div className={`buttons`}>
        <button className="buttons__functionButton">
        {props.doneTasksHidden ? "Pokaż ukończone" : "Ukryj ukończone"}
        </button>
        <button {...props.tasks.find((task) => (!task.done ? "" : "disabled"))} className="buttons__functionButton">
        Ukończ wszystkie
        </button>
        </div>
    }
}


export default Buttons;