function Login ({ onLogin }) {
    return <section className="login">
    <h3 className="login__title">My account</h3>
    <img className="login__img" src="" alt="" />
    <div className="login__inputs">
        <form className="login__form" action="" onSubmit= {(event) => {
            event.preventDefault();
            
            const { target: {email: {value: email}, password: {value: password}}} = event


            try {
                onLogin(email, password)
            } catch (error) {
                alert(error.message);
            }
        }}>
            <input type="email" placeholder="Your email" name="email" id="" required />
            <input type="password" placeholder="Password" name="password" id="" required />
            <button className="login__btn btn" type="submit">Sign in</button>
        </form>
    </div>
</section>
}