import { useContext } from "react";
import {TaskContext} from "../context/TaskContext"

function TaskCard({task}) {
    const {deleteTask} = useContext(TaskContext);

    return (
        <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <button onClick={() => deleteTask(task.id)}>Delete task</button>
        </div>
    )
}

export default TaskCard;