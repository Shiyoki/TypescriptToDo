import { ChangeEvent, FormEvent, useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import { Task } from '../interfaces/task.interface';

interface Props {
    addANewTask: (task: Task) => void;
}

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const initialState = {
    title:'',
    description: ''
}

function TaskForm({addANewTask}: Props) {
    const [task, setsTask] = useState(initialState);

    const handleInputChange = ({target: {name, value}}:HandleInputChange) =>{
        setsTask({...task, [name]: value})
    }

    const handleNewTask = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        addANewTask(task)
        setsTask(initialState)
    }

    return (
        <div className="card card-body bg-secondary text-dark">
            <h1>Add task</h1>
            <form onSubmit={handleNewTask}> 
                <input type="text"
                 placeholder="Write a title" 
                 name="title"
                className="form-control mb-3 rounded-0 shadow-none border-0"
                onChange={handleInputChange}
                value={task.title} />

                <textarea name="description" 
                rows={2}
                placeholder="Write a Description"
                className="form-contro mb-3 shadow-none border-0"
                onChange={handleInputChange}
                value={task.description}
                ></textarea>

                <button className="btn btn-primary ">
                    Save
                    <AiOutlinePlus />
                </button>
            </form>
        </div>
    )
}

export default TaskForm
