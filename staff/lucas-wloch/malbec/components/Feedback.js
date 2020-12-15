import './Feedback.sass'
const Feedback = ({ error, color = "red" }) =>
    <div className={`feedback feedback--${color}`}>
        <p className={`feedback__p feedback__p--${color}`}>{error}</p>
    </div>


export default Feedback