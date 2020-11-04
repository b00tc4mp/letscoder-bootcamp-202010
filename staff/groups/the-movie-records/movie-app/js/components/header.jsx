const { Component } = React;

class Header extends Component {
  constructor() {
    super();
  }

  handleClickAvatar = () => {
    this.props.onLogin();
  };

  handleClickProfile = () => {
    this.props.onProfile();
  };

  render() {
    return (
      <header className="header">
        <div className="header__logo">
          <i className="fa fa-film"></i>MovieRecords
        </div>
        <p onClick={() => this.props.onLogout()}>Logout</p>
        <Avatar
          onAvatar={this.handleClickAvatar}
          onProfile={this.handleClickProfile}
          token={this.props.token}
        />
      </header>
    );
  }
}
