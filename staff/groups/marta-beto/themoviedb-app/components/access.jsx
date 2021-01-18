function Access({onRegisterSection, onLoginSection}) {
    return <section className="access">
        <button onClick={onRegisterSection} className="access__register btn">Register</button> or
        <button onClick={onLoginSection} className="access__login btn">Login</button>
    </section>
} 