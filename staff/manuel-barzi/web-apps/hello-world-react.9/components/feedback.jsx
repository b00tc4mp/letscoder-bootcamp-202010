function Feedback({ message, level = 'success' }) {
    return <section className={`feedback feedback--${level}`}>
        {message}
    </section>
}