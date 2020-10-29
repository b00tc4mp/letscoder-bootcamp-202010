function Access(props) {
    return  <section className="access">
                <button className="access__register btn" onClick={props.onRegister}>Register</button> or 
                <button className="access__login btn" onClick={props.onLogin}>Login</button>
            </section>
}