import logo from './logo.svg';
import './App.css';
import { SignUp, SignIn, Home } from './components'
import { registerUser, authenticateUser } from './logic'
import { Route, withRouter } from 'react-router-dom'
import { Component } from 'react'

export default withRouter(class extends Component {
  handleSignUp = (fullname, email, password) => {
    try {
      registerUser(fullname, email, password, error => {
        if (error) return alert(error.message)

        this.props.history.push('/sign-in')
      })
    } catch (error) {
      alert(error.message)
    }
  }

  handleSignIn = (email, password) => {
    try {
      authenticateUser(email, password, (error, token) => {
        if (error) return alert(error.message)

        sessionStorage.token = token

        this.props.history.push('/home')
      })
    } catch (error) {
      alert(error.message)
    }
  }

  render() {
    const { handleSignUp, handleSignIn} = this

    return <div className="App">
      <header className="App-header">
        <h1>Hello, World!</h1>

        <Route path='/sign-up' render={() => <SignUp onSignUp={handleSignUp} />} />
        <Route path='/sign-in' render={() => <SignIn onSignIn={handleSignIn} />} />
        <Route path='/home' render={() => <Home />} />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  }
})
