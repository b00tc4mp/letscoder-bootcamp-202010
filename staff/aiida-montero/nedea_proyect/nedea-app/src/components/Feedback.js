import './Feedback.scss'
export default function Feedback ({ error }) {
    return <>
        <p id='feedback'>{error}</p>
        </>
}