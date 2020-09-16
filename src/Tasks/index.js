import React from "react";
import "./style.css";


const Tasks = (props) => ( 
    <ul className="tasks">
        {props.tasks.map(( task => 
            <li className={`task${props.doneTasksHidden && task.done ? " task--hidden" : ""}${task.done ? " task--done" : ""}`}>
                <button className={`task__doneButton`}>✔</button>
                <p className={`task__content`}>{task.content}</p>
                <button className={`task__deleteButton`}>✖</button>
            </li>
        ))}
    </ul>
)


export default Tasks;