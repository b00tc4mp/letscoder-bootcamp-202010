function FeedBack( { message, level = 'success', exitError}) {
    return <section className={`feedback feedback--${level}`}>
        {message}
        <div className="button button__error" onClick={exitError}>OK</div>
    </section>
}