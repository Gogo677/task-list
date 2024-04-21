import TaskCard from "./TaskCard";

export default function TaskList({tasks}) {
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
