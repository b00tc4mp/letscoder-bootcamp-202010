import './Feedback.sass'
export default function Feedback ({ error }) {
    return <>
        <p className='feedback'>{error}</p>
        </>
}