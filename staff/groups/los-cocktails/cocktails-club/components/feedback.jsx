function Feedback({error, color = 'black'}) {
    return <>
    <p className={`feedback feedback--${color}`}>{error}</p>
    </>
}