function RegisterConfirm(props) {
    return <section className="register-confirm">
    User registered successfully, proceed to <button className="register-confirm__login btn" onClick={props.onConfirm}>Login</button>
</section>
}