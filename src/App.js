import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Group from "./Group";
import "./style.css";

function App() {
  const [tasks, setTasks] = useState([
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
      tasks.filter((task) => {
        return task.id === id ? false : true;
      })
    );
  };

  return (
    <main className="main">
      <h1 className="main__header">Lista zadań</h1>

      <Group title="Dodaj nowe zadanie">
        <Form />
      </Group>

      <Group
        title="Lista zadań"
        additionalElements={
          <Buttons
            tasks={tasks}
            doneTasksHidden={doneTasksHidden}
            setDoneTasksHidden={setDoneTasksHidden}
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
