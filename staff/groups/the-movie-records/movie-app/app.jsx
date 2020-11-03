const { Component } = React;

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <Home />
        </main>
        <Footer />
      </>
    );
  }
}
