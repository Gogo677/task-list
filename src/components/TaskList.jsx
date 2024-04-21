import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskList() {
  const { tasks } = useContext(TaskContext);
  if (tasks.length == 0) {
    return <h2>No data</h2>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <TaskCard task={task}></TaskCard>
        </div>
      ))}
    </div>
  );
}
