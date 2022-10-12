import PropTypes from 'prop-types'

const Header = (props) => {
    return (
        <header className='navbar navbar-light bg-light w-100 shadow'>
            <h1 className='navbar-brand mb-0'>{props.title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header