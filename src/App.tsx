import {useState} from 'react'
import "bootswatch/dist/yeti/bootstrap.min.css";
import './App.css';
import { Task } from "./interfaces/task.interface";
import TaskList from './components/taskList';
import TaskForm from './components/taskForm';



interface Props{
  title?:string
}


function App({title}:Props) {

  const [task, setTask] = useState<Task[]>([
    {
      id: 1,
      title: "Learn React",
      description: "Learn",
      completed: false
    }
  ])

  const getCurrent = (): number => new Date().getTime();

  const addANewTask = (tasks: Task) => setTask([...task, {...tasks, id: getCurrent(), completed: false}])

  const deleteTask = (id: number) => setTask(task.filter(task => task.id !== id));
  
  return (
    <div className="bg-dark text-white" style={{height: '100vh'}}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">Logo</a>
          {title && <h1>{title}</h1>}
        </div>
      </nav>

      <main className="container p-4">
        <div className="row">     
          <div className="col-md-4">
            <TaskForm addANewTask={addANewTask}/>
          </div>
          <div className="col-md-8">
            <div className="row">
            <TaskList task={task} deleteATask={deleteTask}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
