function Access(props) {
    return <section className="access">
        <button className="access__register" onClick={props.onRegister}>Register</button> or <button className="access__login" onClick={props.onLogin}>Login</button>
    </section>
}
