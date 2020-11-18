function RegisterConfirm(onLogin) {
    return <section className="register-confirm">
        User registered successfully, proceed to <button className="register-confirm__login" onClick={onLogin}>Login</button>.
</section>
}