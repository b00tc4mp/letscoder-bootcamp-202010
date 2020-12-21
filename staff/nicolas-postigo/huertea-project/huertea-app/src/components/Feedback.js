// import './Feedback.sass'

export default ({ message, level = 'success' }) => <p className={`feedback feedback--${level}`}>{message}</p>