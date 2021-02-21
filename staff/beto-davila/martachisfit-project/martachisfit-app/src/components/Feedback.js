import './styles/Feedback.sass'

export default function Feedback({ error, color = "red" }) {
    return <>
        <p className={`feedback feedback--${color}`}>{error}</p>
    </>
}