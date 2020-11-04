const { Component } = React;

class App extends Component {
  constructor() {
    super();
    const { token } = sessionStorage;
    this.state = { view: token ? "home" : "login", token };
  }

  handleGoToLogin = () => {
    this.setState({ view: "login" });
  };

  handleGoToLogout = () => {
    delete sessionStorage.token;
    this.setState({ token: undefined, view: "login" });
  };

  handleGoToRegister = () => {
    this.setState({ view: "register" });
  };

  handleLogin = (email, password) => {
    authenticateUser(email, password, (error, token) => {
      if (error) return alert(error.message);

      this.setState({ token, view: "home" });

      sessionStorage.token = token;
    });
  };

  handleGoToProfile = () => {
    this.setState({ view: "profile" });
  };

  handleRegister = (fullname, email, password, repassword) => {
    registerUser(fullname, email, password, repassword, (error) => {
      if (error) return alert(error.message);

      this.setState({ view: "login" });
    });
  };

  render() {
    const { view } = this.state;
    const {
      handleGoToLogin,
      handleGoToRegister,
      handleRegister,
      handleLogin,
      handleGoToLogout,
      handleGoToProfile,
    } = this;
    return (
      <>
        <Header
          onLogin={handleGoToLogin}
          onLogout={handleGoToLogout}
          onProfile={handleGoToProfile}
          token={this.state.token}
        />
        <main className={`section-${view}`}>
          {console.log(this.state.view)}
          {view === "home" && <Home />}
          {view === "login" && (
            <Login onGoToRegister={handleGoToRegister} onLogin={handleLogin} />
          )}
          {view === "register" && <Register onRegister={handleRegister} />}
          {view === "profile" && <Profile />}
        </main>
        <Footer />
      </>
    );
  }
}
