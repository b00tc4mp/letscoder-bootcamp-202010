function Header(props) {
  return (
    <header className="header">
      <div className="header__logo">
        <i className="fa fa-film"></i>MovieRecords
      </div>
      <div className="avatar">
        <div className="avatar__initials">SG</div>
        <img
          className="avatar__image"
          src="https://s3.amazonaws.com/uifaces/faces/twitter/c_southam/128.jpg"
          alt="alt"
        />
        <div className="avatar__notifications">01</div>
      </div>
    </header>
  );
}
