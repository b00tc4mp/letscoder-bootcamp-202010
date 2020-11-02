const { Component } = React;

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Header />
        <Discover />
        <Search />
      </>
    );
  }
}
