function RegisterConfirm(props) {
  return (
    <section className="register-confirm">
      User <em>registered successfully</em>, proceed to:{' '}
      <button className="register-confirm__login btn" onClick={props.onRegisterCorfim}>
        Login
      </button>
      .
    </section>
  );
}
