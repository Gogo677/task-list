import { useState } from "react";

export default function TaskForm({createTask}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title,description);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          placeholder="Description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button>Save</button>
      </form>
    </div>
  );
}
