function Avatar(props) {
  const { onAvatar, onProfile, user } = props;

  return (
    <div
      className="avatar"
      onClick={() => (user ? onProfile(true) : onAvatar(true))}
    >
      <div className="avatar__initials">SG</div>
      <img
        className="avatar__image"
        src={
          user
            ? user.image
            : "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png"
        }
        alt="alt"
      />
      <div className="avatar__notifications">01</div>
    </div>
  );
}
