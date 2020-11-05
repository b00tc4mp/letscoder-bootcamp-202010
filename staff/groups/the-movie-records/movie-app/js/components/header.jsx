function Header(props) {
  return (
    <header className="header">
      <div className="header__logo">
        <i className="fa fa-film"></i>MovieRecords
      </div>
      {props.user && (
        <button className="header__logout" onClick={() => props.onLogout()}>
          Logout
        </button>
      )}
      <Avatar
        onAvatar={props.onLogin}
        onProfile={props.onProfile}
        user={props.user}
      />
    </header>
  );
}
