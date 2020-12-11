function Avatar(props) {
  const { onAvatar, onProfile, user } = props;

  return (
    <div
      className="avatar"
      onClick={() => (user ? onProfile(true) : onAvatar(true))}
    >
      <img
        className="avatar__image"
        src={
          user && user.image ? user.image : "https://tinyurl.com/avatardefault"
        }
        alt="alt"
      />
      <div className="avatar__notifications">01</div>
    </div>
  );
}
