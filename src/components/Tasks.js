import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <div className="p-3">
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </div>
    )
}

export default Tasks