function Register(props) {
  return (
    <section className="register">
      <h2 className="sub-title">Register</h2>

      <form
        className="register__form"
        onSubmit={function (event) {
          event.preventDefault();

          var fullname = event.target.fullname.value;
          var email = event.target.email.value;
          var password = event.target.password.value;
          var repassword = event.target.repassword.value;

          try {
            props.onRegister(fullname, email, password, repassword);
          } catch (error) {
            alert(error.message);
          }
        }}
      >
        <input className="register__fullname" type="text" name="fullname" placeholder="full name" _required />
        <input className="register__email" type="email" name="email" placeholder="e-mail" required />
        <input className="register__password" type="password" name="password" placeholder="password" required />
        <input
          className="register__repassword"
          type="password"
          name="repassword"
          placeholder="repeat password"
          required
        />
        <button className="btn">Register</button>
      </form>
    </section>
  );
}
