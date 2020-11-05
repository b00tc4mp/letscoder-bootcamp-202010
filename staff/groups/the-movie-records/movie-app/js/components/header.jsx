function Header(props) {
  const { onLogout, onLogo, onLogin, user, onProfile } = props;
  return (
    <header className="header">
      <div onClick={() => onLogo()} className="header__logo">
        <i className="fa fa-film"></i>MovieRecords
      </div>
      {props.user && (
        <button className="header__logout" onClick={() => onLogout()}>
          Logout
        </button>
      )}
      <Avatar onAvatar={onLogin} onProfile={onProfile} user={user} />
    </header>
  );
}
