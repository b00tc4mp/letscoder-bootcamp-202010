function RegisterConfirm (props) {
return <section className="register-confirm">
        <p className="register-confirm__thk">Thank you! Feel free to log in now and start enjoying ;)</p>
        <button onClick={props.onLoginSection} className="register-confirm__btn btn">Login</button>
    </section>
}