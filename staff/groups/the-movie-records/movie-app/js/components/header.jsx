function Header(props) {
  return (
    <header className="header">
      <div className="header__logo">
        <i className="fa fa-film"></i>MovieRecords
      </div>

      <p onClick={() => props.onLogout()}>Logout</p>

      <Avatar
        onAvatar={props.onLogin}
        onProfile={props.onProfile}
        user={props.user}
      />
    </header>
  );
}
