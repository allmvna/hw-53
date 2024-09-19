import React from 'react';
import './Task.css';

interface TaskProps {
    DeleteThisTask: () => void;
    task: string;
}

const Task: React.FC<TaskProps> = ({ task, DeleteThisTask }) => {
    return (
        <div className="task">
            <p>{task.text}</p>
            <button onClick={DeleteThisTask}>Delete</button>
        </div>
    );
};

export default Task;