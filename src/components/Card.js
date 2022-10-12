import Button from "./Button"

const Card = () => {
    const onClick = () => {
        console.log('Click')
    }
    return (
        <div className='container border mt-5'>
            <div className='container py-3 d-flex justify-content-between'>
                <h2>Task Tracker</h2>
                <Button color='dark' text='Add' onClick={onClick} />
            </div>
        </div>
    )
}

export default Card