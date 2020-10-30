// Creates the Register Confirm section. Triggers an event click to display a result in other callback.
function RegisterConfirm(props) {
    return <section className="register-confirm">
    User registered successfully, proceed to <button className="register-confirm__login btn" onClick={props.onLoginSection}>Login</button>
</section>
}