import { useState } from "react"

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please Add a Task Name')
            return
        }

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='p-4' onSubmit={onSubmit}>
            <div className="form-group">
                <label>Add a Task:</label>
                <input className="form-control" type='text' placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label>Day and Time</label>
                <input className="form-control" type='text' placeholder="Mon, Oct 31 at 3:00pm" value={day} onChange={(e) => setDay(e.target.value)}></input>
            </div>
            <div className="form-group px-4 py-1">
                <input className="form-check-input" type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}></input>
                <label className="form-check-label">Remind me</label>
            </div>
            <input className="btn btn-dark btn-block" type='submit' value='Save Task'></input>
        </form>
    )
}

export default AddTask