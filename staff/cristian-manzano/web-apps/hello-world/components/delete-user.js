function mountDeleteUser (onUnregistred) {

    var container = mountDeleteUser(`<section class = "deleteUser">
        <form class = "deleteForm">
            <input type="password" name = "password" placeholder = "pasword" required>
            <button>Delete</button>
        </form>
    </section>`)

    var form = container.querySelector('.deleteForm')

    form.onsubmit = function(event) {
        event.preventDefault()

        var inputs = form.querySelectorAll('input')

        var password = inputs[0].value

        try { onUnregistred (password)
        } catch (error) {
            alert(error.message)
        }
    }
    return container
}