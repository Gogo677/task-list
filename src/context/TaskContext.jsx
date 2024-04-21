import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/data";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  const createTask = (title, description) => {
    const newTask = {
      title,
      description,
      id: tasks.length + 1,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id != taskId)
    setTasks(newTasks);
  }
  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
