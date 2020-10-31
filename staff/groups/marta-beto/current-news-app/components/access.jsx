function Access(props) {
    return <section class="access">
        <img class="access__img" src="./style/access-image.png" alt="" />
        <button onclick={props.onRegisterSection} class="access__register btn">Register</button> or
        <button onclick={props.onLoginSection} class="access__login btn">Login</button>
    </section>
} 