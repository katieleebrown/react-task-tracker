import { useState } from "react";
import Button from "./Button"
import Tasks from "./Tasks"
import AddTask from './AddTask';

const Card = ({ tasks, onDelete, onToggle, onAdd }) => {
    const [showAddTask, setshowAddTask] = useState(false)

    return (
        <div className='container border mt-5 px-4 py-3'>
            <div className='container py-3 px-0 mx-0 d-flex justify-content-between'>
                <h2>Task Tracker</h2>
                <Button color={showAddTask ? 'dark' : 'success'} text={showAddTask ? 'Close' : 'Add'} onAdd={() => setshowAddTask(!showAddTask)} />
            </div>
            {showAddTask && <AddTask onAdd={onAdd} />}
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle} /> : 'No tasks to show.'}
        </div>
    )
}

export default Card