const { Component } = React;

class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const { user } = this.props;
    const { token } = sessionStorage;

    retrieveLikes(token, (error, likedMovies) => {
      if (error) alert(error.message);

      this.setState({
        fullname: user.fullname,
        image: user.image,
        likedMovies,
      });
    });
  }

  handleChangeFullName = (event) => {
    this.setState({ fullname: event.target.value });
  };

  handleChangeImage = (event) => {
    this.setState({ image: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onModify(
      this.state && this.state.fullname,
      this.state && this.state.image
    );
  };

  handleGoToLikes = () => {};

  render() {
    const { onModify, user } = this.props;
    const { image } = this.state;
    const { handleChangeFullName, handleChangeImage, handleSubmit } = this;
    return (
      <>
        <div className="section-profile__user">
          <h2
            onClick={(event) => {
              event.preventDefault();
              this.handleGoToLikes();
            }}
          >
            Profile
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              className="section-profile__name"
              type="text"
              onChange={handleChangeFullName}
              name="fullname"
              placeholder="full name"
              defaultValue={user && user.fullname}
            />
            <img
              className="section-profile__image"
              src={image ? image : "https://tinyurl.com/avatardefault"}
            />
            <input
              className="section-profile__data"
              type="text"
              onChange={handleChangeImage}
              name="image"
              placeholder="image url"
              defaultValue={user && user.image}
            />

            <button className="btn">Save</button>
          </form>
        </div>
        <div className="section-profile__favorites u-p-h-20">
          <ul className="u-grid">
            {this.state &&
              this.state.likedMovies &&
              this.state.likedMovies.map((movie) => (
                <li className="u-grid__item" key={movie.id}>
                  <Card movie={movie} />
                </li>
              ))}
          </ul>
        </div>
      </>
    );
  }
}
