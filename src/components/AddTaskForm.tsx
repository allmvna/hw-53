import React from 'react';
import './AddTaskForm.css';

interface Props {
    currentTask: string;
    onChangeTask:  React.ChangeEventHandler<HTMLInputElement>;
    AddNewTask: () => void;
}

const AddTaskForm: React.FC<Props> = ({currentTask, onChangeTask, AddNewTask}) => {
    return (
        <div className= 'form-task'>
            <input
                type= 'text'
                value={currentTask}
                onChange={onChangeTask}
                placeholder='Add new task' />
            <button onClick={AddNewTask} type='button'>Add Task</button>
            </div>
    );
};

export default AddTaskForm;