const { Component } = React;

class App extends Component {
  constructor() {
    super();
    const { token } = sessionStorage;
    this.state = { view: "Home" };
  }

  handleGoToLogin = () => {
    this.setState({ view: "Login" });
  };

  handleLogin = (email, password) => {
    authenticateUser(email, password, (error, token) => {
      if (error) return alert(error.message);

      this.setState({ token, view: "Home" });

      sessionStorage.token = token;
    });
  };

  render() {
    const { view } = this.state;
    const { handleGoToLogin, handleLogin } = this;
    return (
      <>
        <Header onLogin={handleGoToLogin} />
        <main>
          {console.log(this.state.view)}
          {view === "Home" && <Home />}
          {view === "Login" && <Login onLogin={handleLogin} />}
        </main>
        <Footer />
      </>
    );
  }
}
