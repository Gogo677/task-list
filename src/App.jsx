import TaskList from "./components/TaskList"
import { useState, useEffect } from "react"
import {tasks as data} from "./data/data"
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks,setTasks] = useState([]);
  useEffect(() => {setTasks(data)},[]);

  const createTask = (title,description) =>{
    const newTask = {
      title,
      description,
      id: (tasks.length+1)
    }
    setTasks([...tasks,newTask]);
  } 

  return (
    <>
    <TaskForm createTask={createTask}></TaskForm>
    <TaskList tasks={tasks}></TaskList>
    </>
  )
}

export default App
