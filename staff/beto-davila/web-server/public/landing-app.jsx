// The function that renders the accept-cookies component
const { Component } = React
class App extends Component {
  constructor() {
      super()

      
      const { cookiesAccepted } = state

      this.state = { cookiesAccepted }
  }

  handleAcceptCookies = () => {
      acceptCookies(error => {
          if (error) return alert(error.message)

          this.setState({ cookiesAccepted: true })
      })
  }

  render() {
      const { state: { cookiesAccepted }, handleAcceptCookies } = this

      return <>
          {!cookiesAccepted && <AcceptCookies onAccept={handleAcceptCookies} />}
      </>
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
