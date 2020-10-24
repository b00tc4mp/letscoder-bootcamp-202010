function mountRegister(onRegister){
    var container = mountContainer(`<section class="registerPage">
            
    <form class = "userInfo">
        <input type="text" name="fullname" placeholder="full name" _required>
        <input type="email" name="email" placeholder="e-mail" required>
        <input type="password" name="password" placeholder="password" required>
        <input type="password" name="repassword" placeholder="repeat password" required>
        <button class="userInfo__register">Register</button>
    </form>
</section>`)

    var form = container.querySelector('.userInfo')

    form.onsubmit = function (event) {
        event.preventDefault()

        var inputs = document.querySelectorAll('input')

        var fullname = inputs[0].value
        var email = inputs[1].value
        var password = inputs[2].value
        var repassword = inputs[3].value

        try {
             onRegister(fullname,email,password,repassword)
        } catch (error) {
            
            alert (error.message)
        }
    }
    return container
}
 