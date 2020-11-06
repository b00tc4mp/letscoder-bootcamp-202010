const { Component } = React;

class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const { user } = this.props;
    this.setState({ fullname: user.fullname, image: user.image });
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

  render() {
    const { onModify, user } = this.props;
    const { handleChangeFullName, handleChangeImage, handleSubmit } = this;
    return (
      <>
        <div>
          <h2>Profile</h2>
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
              src={this.state && this.state.image}
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
        <div className="favorites"></div>
      </>
    );
  }
}
