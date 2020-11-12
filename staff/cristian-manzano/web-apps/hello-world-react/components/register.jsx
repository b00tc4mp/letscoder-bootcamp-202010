function Register(onRegister) {
    return <section className="register">
        <h2>Register</h2>

        <form className="register__form" onSubmit={function (event) {
            event.preventDefault()

            const { target: {fullname: { value: fullname }, email: { value: email }, password: { value: password }, repassword: { value: repassword} } } = event

            try {
                onRegister(fullname, email, password, repassword)
            } catch (error) {
                alert(error.message)
            }
        }}>
            <input type="text" name="fullname" placeholder="full name" required />
            <input type="email" name="email" placeholder="e-mail" required />
            <input type="password" name="password" placeholder="password" required />
            <input type="password" name="repassword" placeholder="repeat password" required />
            <button>Register</button>
        </form>
    </section>
}