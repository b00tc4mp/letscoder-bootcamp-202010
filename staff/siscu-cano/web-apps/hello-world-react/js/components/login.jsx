function Login(props) {
  return (
    <section className="login">
      <h2 className="sub-title">Login</h2>

      <form
        className="login__form"
        onSubmit={function (event) {
          event.preventDefault();

          var email = event.target.email.value;
          var password = event.target.password.value;

          try {
            props.onLogin(email, password);
          } catch (error) {
            alert(error.message);
          }
        }}
      >
        <input className="login__email" type="email" name="email" placeholder="e-mail" required />
        <input className="login__password" type="password" name="password" placeholder="password" required />
        <button className="btn">Login</button>
      </form>
    </section>
  );
}
