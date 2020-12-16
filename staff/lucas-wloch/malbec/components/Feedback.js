import './Feedback.sass'
const Feedback = ({ error, color = "red", onExit}) =>
    <div className={`feedback feedback--${color}`}>
        <button onClick={onExit}>❌</button>
        <p className={`feedback__p feedback__p--${color}`}>{error}</p>
    </div>


export default Feedback