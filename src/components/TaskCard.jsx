import { useContext } from "react";
import {TaskContext} from "../context/TaskContext"

function TaskCard({task}) {
    const {deleteTask} = useContext(TaskContext);

    return (
        <div className="text-white bg-gray-800 p-4 rounded-md">
            <h2 className="text-2xl font-bold capitalize">{task.title}</h2>
            <p className="text-gray-400 text-sm">{task.description}</p>
            <button className="bg-red-950 py-1 px-2 text-sm rounded-md border-white mt-4 hover:bg-red-800" onClick={() => deleteTask(task.id)}>Delete task</button>
        </div>
    )
}

export default TaskCard;