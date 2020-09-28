import React from "react";
import {
  TaskList,
  Task,
  DoneButton,
  TaskContent,
  DeleteButton,
} from "./styledTasks";

const Tasks = ({ tasks, doneTasksHidden, toggleTaskDone, removeTask }) => {
  return (
    <TaskList>
      {tasks.map((task) => (
        <Task key={task.id} hidden={doneTasksHidden && task.done}>
          <DoneButton done={task.done} onClick={() => toggleTaskDone(task.id)}>
            ✔
          </DoneButton>
          <TaskContent done={task.done} className={`task__content`}>
            {task.content}
          </TaskContent>
          <DeleteButton
            className={`task__deleteButton`}
            onClick={() => removeTask(task.id)}
          >
            ✖
          </DeleteButton>
        </Task>
      ))}
    </TaskList>
  );
};

export default Tasks;
