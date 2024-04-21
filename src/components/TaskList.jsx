import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskList() {
  const { tasks } = useContext(TaskContext);
  if (tasks.length == 0) {
    return <h2 className="text-2xl text-white font-bold">No Tasks created</h2>;
  }

  return (
    <div className="grid grid-cols-3  gap-4">
      {tasks.map((task) => (
        <div key={task.id}>
          <TaskCard task={task}></TaskCard>
        </div>
      ))}
    </div>
  );
}
