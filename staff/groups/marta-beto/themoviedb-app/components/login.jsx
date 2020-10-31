function Login (props) {
    return   <section class="login off">
    <h3 class="login__title">My account</h3>
    <img class="login__img" src="" alt="" />
    <div class="login__inputs">
        <form class="login__form" action="">
            <input type="email" placeholder="Your email" name="email" id="" required />
            <input type="password" placeholder="Password" name="password" id="" required />
            <button onclick={props.onLogin} class="login__btn btn" type="submit">Sign in</button>
        </form>
    </div>
</section>
}