function FeedBack( { message, level = 'success', exitError}) {
    return <section className={`feedback feedback--${level}`}>
        <div className="button button__error" onClick={exitError}>OK</div>
        {message}
    </section>
}