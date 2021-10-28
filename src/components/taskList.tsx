import {Task} from '../interfaces/task.interface'
import TaskCard from './taskCard'

interface Props {
    task : Task[];
    deleteATask: (id:number)=> void;
}

function TaskList({task, deleteATask}:Props) {
    return (
     <>
        {task.map(task => (
        <div className="col-md-4 pb-2" key={task.id}>
            <TaskCard task={task} deleteATask={deleteATask}/>
        </div>
        ))}
     </>
    )
}

export default TaskList
