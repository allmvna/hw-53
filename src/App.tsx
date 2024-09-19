import './App.css';
import AddTaskForm from "./components/AddTaskForm.tsx";
import Task from "./components/Task.tsx";
import React, {useState} from 'react';

interface ITask {
    text: string;
    id: number | string;
}

const getInitialTasks = () => [
    {text: 'Read Harry Potter', id: 1},
    {text: 'Draw a tower', id: 2},
    {text: 'Meet a friend', id: 3},
];

const App = () => {
    const [tasks, setTasks] = useState<ITask[]>(getInitialTasks);
    const [currentTask, setCurrentTask] = useState('');


    const addTask = () => {
        if (currentTask.trim() === '') return;

        const newTask: ITask = {
            id: Date.now().toString(),
            text: currentTask
        };

        setTasks([...tasks, newTask]);
        setCurrentTask('');
    };

    const deleteTask = (id: string) => {
        setTasks(tasks.filter(task => task.id !== id));
    };


    const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentTask(e.target.value);
    };



    return (
        <>
            <div className='container'>
                <div className='add-task-block'>
                    <AddTaskForm
                        currentTask={currentTask}
                        onChangeTask={handleTaskChange}
                        AddNewTask={addTask}
                    />
                </div>

                <div className='task-block'>
                    <ul>
                        {tasks.map(task => (
                            <Task key={task.id} task={task} DeleteThisTask={() => deleteTask(task.id)}/>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default App;
