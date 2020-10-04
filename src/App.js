import React, { useEffect, useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Group from "./Group";
import "./style.css";

function App() {
  const useLocalStorageItem = (keyName, initialValue) => {
    const getInitialValue = () => {
      if (localStorage.getItem(keyName) !== null) {
        return JSON.parse(localStorage.getItem(keyName));
      } else {
        return initialValue;
      }
    };
    const [item, setItem] = useState(getInitialValue);
    localStorage.setItem(keyName, JSON.stringify(item));

    useEffect(() => {
      localStorage.setItem(keyName, JSON.stringify(item));
    }, [item]);

    return [item, setItem];
  };

  const [tasks, setTasks] = useLocalStorageItem("tasks", [
    {
      id: 1,
      content: "zjeść ciastko",
      done: true,
    },
    {
      id: 2,
      content: "wypić herbatę",
      done: false,
    },
  ]);

  const [doneTasksHidden, setDoneTasksHidden] = useState(false);

  const toggleTaskDone = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            done: !task.done,
          };
        }
        return task;
      })
    );
  };

  const removeTask = (id) => {
    setTasks(
      // this filter function checks if the task.id matches the given id and returns
      // false to filter function which removes it from tasks array
      tasks.filter((task) => {
        return task.id === id ? false : true;
      })
    );
  };

  const setAllTasksDone = () => {
    setTasks(
      tasks.map((task) => ({
        ...task,
        done: true,
      }))
    );
  };

  const addNewTask = (newTaskContent) => {
    setTasks([
      ...tasks,
      {
        content: newTaskContent,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      },
    ]);
  };

  return (
    <main className="main">
      <h1 className="main__header">Lista zadań</h1>

      <Group title="Dodaj nowe zadanie">
        <Form addNewTask={addNewTask} />
      </Group>

      <Group
        title="Lista zadań"
        additionalElements={
          <Buttons
            tasks={tasks}
            doneTasksHidden={doneTasksHidden}
            setDoneTasksHidden={setDoneTasksHidden}
            setAllTasksDone={setAllTasksDone}
          />
        }
      >
        <Tasks
          removeTask={removeTask}
          toggleTaskDone={toggleTaskDone}
          tasks={tasks}
          doneTasksHidden={doneTasksHidden}
        />
      </Group>
    </main>
  );
}

export default App;
