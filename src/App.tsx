import './App.css';
import AddTaskForm from "./components/AddTaskForm.tsx";
import Task from "./components/Task.tsx";
import {useState} from "react";

interface ITask {
    text: string;
    id: number;
}

const App = () => {
    const [tasks, setTasks] = useState<ITask[]>(getInitialTasks);

    const getInitialTasks = () => [
        {text: 'Read Harry Potter', id: 1},
        {text: 'Draw a tower', id: 2}
    ]







  return (
    <>
      <div>
          <AddTaskForm

          />
          <Task>

          </Task>

      </div>

    </>
  )
};

export default App
