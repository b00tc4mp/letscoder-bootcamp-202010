function Access({ onRegister, onLogin }) {
    return <section className="access">
        <button className="access__register" onClick={onRegister}>Register</button> or <button className="access__login" onClick={onLogin}>Login</button>
    </section>
}