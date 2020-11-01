function Access(props) {
    return <section className="access">
        <button onClick={props.onRegisterSection} className="access__register btn">Register</button> or
        <button onClick={props.onLoginSection} className="access__login btn">Login</button>
    </section>
} 