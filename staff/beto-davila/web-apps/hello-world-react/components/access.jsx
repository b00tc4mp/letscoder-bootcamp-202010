// Compo displaying the register and login button in the home section. Triggers the click events to pass them to callbacks functions.

function Access(props) {
    return  <section className="access">
                <button className="access__register btn" onClick={props.onRegisterSection}>Register</button> or 
                <button className="access__login btn" onClick={props.onLoginSection}>Login</button>
            </section>
}