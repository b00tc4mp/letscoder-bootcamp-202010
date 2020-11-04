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

  handleModifyUser = (fullname, image) => {
    modifyUser(this.props.token, { fullname, image }, error => {
        if (error) alert(error.message)

        retrieveUser(this.props.token, (error, user) => {
            if (error) return alert(error.message)

            this.setState({ user })
        })
    })
}
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
      handleModifyUser,
   
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
          {view === "home" && <Home />}
          {view === "login" && (
            <Login onGoToRegister={handleGoToRegister} onLogin={handleLogin} />
          )}
          {view === "register" && <Register onRegister={handleRegister} />}
          {view === "profile" && <Profile onModify={handleModifyUser} token = {this.state.token} />} 
          
        </main>
        <Footer />
      </>
    );
  }
}
