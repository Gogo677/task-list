import { useState,useContext } from "react";
import TaskContext from "../context/TaskContext";

export default function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const {createTask} = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title,description);
  };

  return (
    <div className="max-w-md mx-auto p-10 rounded-md bg-slate-700 mb-4">
      <h1 className="font-bold text-2xl text-white mb-4">Create a task</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          className="bg-slate-300 p-3 w-full mb-4 rounded-md"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          placeholder="Description"
          className="bg-slate-300 p-3 w-full mb-4 rounded-md"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button className="bg-green-800 text-white rounded-md px-4 py-2 hover:bg-green-600">Save</button>
      </form>
    </div>
  );
}
