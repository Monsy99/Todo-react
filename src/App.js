import React from 'react';
import Form from "./Form";
import Tasks from './Tasks';
import Buttons from './Buttons';
import Group from './Group';
import './style.css'

const tasks = [
    {
        id:1,
        content:"zjeść ciastko",
        done:true,
    },
    {
        id:2,
        content:"wypić herbatę",
        done:false,
    }
]
const doneTasksHidden = false;

function App() {
    return (
        <main className="main">
            <h1 className="main__header">Lista zadań</h1>
            
            <Group 
            title="Dodaj nowe zadanie"
            >
                <Form/>
            </Group>

            <Group 
            title="Lista zadań" 
            additionalElements={<Buttons tasks={tasks} doneTasksHidden={doneTasksHidden}/>}
            >
                <Tasks tasks={tasks} doneTasksHidden={doneTasksHidden} />
            </Group>
        </main>
    );
}

export default App; 