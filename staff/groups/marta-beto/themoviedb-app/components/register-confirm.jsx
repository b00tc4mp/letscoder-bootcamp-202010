function RegisterConfirm (props) {
return <section class="register-confirm off">
        <p class="register-confirm__thk">Thank you! Feel free to log in now and start enjoying the web</p>
        <button onclick={props.onLoginSection} class="register-confirm__btn btn">Login</button>
    </section>
}