function Avatar(props) {
  const { token, onAvatar, onProfile } = props;
  console.log(token);
  return (
    <div
      className="avatar"
      onClick={() => (token ? onProfile(true) : onAvatar(true))}
    >
      <div className="avatar__initials">SG</div>
      <img
        className="avatar__image"
        src="https://s3.amazonaws.com/uifaces/faces/twitter/c_southam/128.jpg"
        alt="alt"
      />
      <div className="avatar__notifications">01</div>
    </div>
  );
}
