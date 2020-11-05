function Profile(props) {
  return (
    <>
      <h2>Profile</h2>
      <div>
      <form
        onSubmit={function (event) {
          event.preventDefault();

          props.onModify(props.user.fullname, props.user.image);
        }}
      >
        <input className = "section-profile__name"
          type="text"
          name="fullname"
          placeholder="full name"
          defaultValue={props.user && props.user.fullname}
        />
        <img className = "section-profile__image" src={props.user && props.user.image} />
        <input className = "section-profile__data"
          type="text"
          name="image"
          placeholder="image url"
          defaultValue={props.user && props.user.image}
        />

        <button className = "btn">Save</button>
        
      </form>
      </div>
      <div className = "favorites"></div>
    </>
  );
}
