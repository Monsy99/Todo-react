import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTaskDone, removeTask, selectTasks } from "../tasksSlice";

import {
  TasksList,
  Task,
  DoneButton,
  TaskContent,
  DeleteButton,
} from "./styledTasks";

const TaskList = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    <TasksList>
      {tasks.map((task) => (
        <Task key={task.id} hidden={hideDone && task.done}>
          <DoneButton
            done={task.done}
            onClick={() => {
              dispatch(toggleTaskDone(task.id));
            }}
          >
            ✔
          </DoneButton>
          <TaskContent done={task.done}>{task.content}</TaskContent>
          <DeleteButton
            onClick={() => {
              dispatch(removeTask(task.id));
            }}
          >
            ✖
          </DeleteButton>
        </Task>
      ))}
    </TasksList>
  );
};

export default TaskList;
