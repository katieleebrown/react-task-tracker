import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {

    return (
        <button onClick={onClick} className={`btn btn-${color} bg-${color} px-4`}>{text}</button >
    )
}

Button.defaultProps = {
    color: 'dark',
    text: 'Click Me'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button