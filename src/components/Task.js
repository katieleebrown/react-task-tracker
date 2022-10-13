import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`container bg-light px-3 pb-1 m-1 ${task.reminder ? 'border-left border-success' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <div className='d-flex justify-content-between pt-3' >
                <h4>{task.text}</h4>
                <FaTimes onClick={() => onDelete(task.id)} style={{ color: 'red', cursor: 'pointer' }} />
            </div>

            <p>{task.day}</p>
        </div>
    )
}

export default Task