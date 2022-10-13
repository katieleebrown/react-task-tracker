import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function TaskDetails() {
    const [loading, setLoading] = useState(true)
    const [task, setTask] = useState({})
    const [error, setError] = useState(null)

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchTask = async () => {
            const res = await fetch(`http://localhost:5000/tasks/${params.id}`)
            const data = await res.json()

            if (res.status === 404) {
                navigate('/')
            }

            setTask(data)
            setLoading(false)

        }

        fetchTask()
    })

    if (error) {
        navigate('/')
    }

    return loading ? (
        <h3 className='pt-5'>Loading...</h3>
    ) : (
        <div className='container mt-3 p-3 border'>
            <h4>{task.text}</h4>
            <p>{task.day}</p>
            <button className='btn btn-primary' onClick={() => {
                navigate(-1)
            }}>Go Back</button>
        </div>
    )
}

export default TaskDetails