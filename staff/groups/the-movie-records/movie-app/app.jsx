const { Component } = React;

class App extends Component {
  constructor() {
    super();
    const { token } = sessionStorage;
    this.state = { view: token ? "home" : "login", token };
    this.homeRef = React.createRef();
  }

  componentWillMount() {
    const { token } = sessionStorage;

    token &&
      retrieveUser(token, (error, user) => {
        if (error) return alert(error.message);
        this.setState({ user });
      });
  }

  handleGoToLogin = () => {
    this.setState({ view: "login" });
  };

  handleGoToLogout = () => {
    delete sessionStorage.token;

    this.setState({ view: "login", user: undefined });
  };

  handleGoToRegister = () => {
    this.setState({ view: "register" });
  };

  handleLogin = (email, password) => {
    authenticateUser(email, password, (error, token) => {
      if (error) return alert(error.message);

      sessionStorage.token = token;

      retrieveUser(token, (error, user) => {
        if (error) return alert(error.message);
        this.setState({ user, view: "home" });
      });
    });
  };

  handleGoToProfile = () => {
    this.setState({ view: "profile" });
  };

  handleModifyUser = (fullname, image) => {
    console.log("ieeppppppp", fullname, image);
    const { token } = sessionStorage;

    modifyUser(token, { fullname, image }, (error) => {
      if (error) alert(error.message);

      retrieveUser(token, (error, user) => {
        if (error) return alert(error.message);

        this.setState({ user });
      });
    });
  };
  handleRegister = (fullname, email, password, repassword) => {
    registerUser(fullname, email, password, repassword, (error) => {
      if (error) return alert(error.message);

      this.setState({ view: "login" });
    });
  };

  handleLogo = () => {
    const { token } = sessionStorage;
    token &&
      this.homeRef &&
      this.homeRef.current &&
      this.homeRef.current.handleGoHome();
    this.setState({ view: token ? "home" : "login" });
  };

  render() {
    const { view, user } = this.state;
    const {
      handleGoToLogin,
      handleGoToRegister,
      handleRegister,
      handleLogin,
      handleGoToLogout,
      handleGoToProfile,
      handleModifyUser,
      handleLogo,
    } = this;
    return (
      <>
        <Header
          onLogin={handleGoToLogin}
          onLogout={handleGoToLogout}
          onProfile={handleGoToProfile}
          onLogo={handleLogo}
          user={user}
        />
        <main className={`section-${view}`}>
          {view === "home" && <Home ref={this.homeRef} />}
          {view === "login" && (
            <Login onGoToRegister={handleGoToRegister} onLogin={handleLogin} />
          )}
          {view === "register" && <Register onRegister={handleRegister} />}
          {view === "profile" && (
            <Profile user={user} onModify={handleModifyUser} />
          )}
        </main>
        <Footer />
      </>
    );
  }
}
