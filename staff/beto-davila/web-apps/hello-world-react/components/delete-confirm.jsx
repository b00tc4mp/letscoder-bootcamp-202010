function Delete(props){
    return <section className="delete">
    <h5>Confirm for unregistering:</h5>
    <form className="delete__form" onSubmit= {
        function(event) {
            event.preventDefault();

            var email = event.target.email.value;
            var password = event.target.password.value;

            try {
                props.onDelete(email, password);
            } catch (error) {
                alert(error.message);
            }
        }
    }>
            <input type="email" name="email" placeholder="e-mail" required />
            <input type="password" name="password" placeholder="password" required />
            <button className="delete__btn btn">Delete</button>
    </form>
    </section>
}