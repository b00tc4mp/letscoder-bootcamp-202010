function mountAccess(onRegister, onLogin) {
    var temp = document.createElement("div");

    temp.innerHTML = `<section class="access">
    <button class="access__register">Register</button> or <button class="access__login">Login</button>
</section>`

    var container = temp.firstChild



    var register = container.querySelector(".access__register")
    register.onclick = onRegister

    var login =container.querySelector(".access__login")
    login.onclick = onLogin

    return container
}