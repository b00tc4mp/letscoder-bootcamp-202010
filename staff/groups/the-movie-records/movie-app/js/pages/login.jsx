function Login({ onLogin, onGoToRegister }) {
  return (
    <section className="login">
      <form
        className="login__form"
        onSubmit={function (event) {
          event.preventDefault();

          const {
            target: {
              email: { value: email },
              password: { value: password },
            },
          } = event;

          try {
            onLogin(email, password);
          } catch (error) {
            alert(error.message);
          }
        }}
      >
        <input
          className="login__email"
          type="email"
          name="email"
          placeholder="e-mail"
          required
        />
        <input
          className="login__password"
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <div className="login__buttons">
          <button className="btn">Login</button>
          <button className="btn" onClick={onGoToRegister}>
            Register
          </button>
        </div>
      </form>
    </section>
  );
}
