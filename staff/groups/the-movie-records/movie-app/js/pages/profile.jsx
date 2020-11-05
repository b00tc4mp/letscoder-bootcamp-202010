function Profile(props) {
  return (
    <>
      <h2>Profile</h2>
      <form
        onSubmit={function (event) {
          event.preventDefault();

          props.onModify(props.user.fullname, props.user.image);
        }}
      >
        <input
          type="text"
          name="fullname"
          placeholder="full name"
          defaultValue={props.user && props.user.fullname}
        />
        <img src={props.user && props.user.image} />
        <input
          type="text"
          name="image"
          placeholder="image url"
          defaultValue={props.user && props.user.image}
        />

        <button>Save</button>
      </form>
    </>
  );
}
