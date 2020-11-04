const { Component } = React;

class Header extends Component {
  constructor() {
    super();
  }

  handleClickAvatar = () => {
    console.log("Pulsado avatar");
    this.props.onLogin();
  };

  render() {
    return (
      <header className="header">
        <div className="header__logo">
          <i className="fa fa-film"></i>MovieRecords
        </div>
        <Avatar onAvatar={this.handleClickAvatar} />
      </header>
    );
  }
}
