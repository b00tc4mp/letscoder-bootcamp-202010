function Access(props) {
  return (
    <section className="access">
      <img className="access_banana" src="images/banana.gif" alt="Banana" />
      <button className="access__register btn" onClick={props.onRegister}>
        Register
      </button>{' '}
      or
      <button onClick={props.onLogin} className="access__login btn">
        Login
      </button>
    </section>
  );
}
