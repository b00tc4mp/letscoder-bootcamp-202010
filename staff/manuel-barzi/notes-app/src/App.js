import logo from './logo.svg';
import './App.css';
import { SignUp, SignIn, Home, Detail } from './components'
import { registerUser, authenticateUser } from './logic'
import { Route, withRouter, Redirect } from 'react-router-dom'

export default withRouter(props => {
  const handleSignUp = (fullname, email, password) => {
    try {
      registerUser(fullname, email, password, error => {
        if (error) return alert(error.message)

        props.history.push('/sign-in')
      })
    } catch (error) {
      alert(error.message)
    }
  }

  const handleSignIn = (email, password) => {
    try {
      authenticateUser(email, password, (error, token) => {
        if (error) return alert(error.message)

        sessionStorage.token = token

        props.history.push('/')
      })
    } catch (error) {
      alert(error.message)
    }
  }

  const { token } = sessionStorage

  return <div className="App">
    <header className="App-header">
      <h1>Hello, World!</h1>

      <Route path='/sign-up' render={() => token ? <Redirect to="/" /> : <SignUp onSignUp={handleSignUp} />} />
      <Route path='/sign-in' render={() => token ? <Redirect to="/" /> : <SignIn onSignIn={handleSignIn} />} />
      <Route exact path='/' render={() => token ? <Home /> : <Redirect to="/sign-in" />} />

      <button onClick={() => props.history.push('/items/1239711293712389/color/red')}>Go to one detail RED (demo)</button>
      <button onClick={() => props.history.push('/items/1239711293712390/color/green')}>Go to one detail GREEN (demo)</button>
      <button onClick={() => props.history.push('/items/1239711293712391/color/blue')}>Go to one detail BLUE (demo)</button>

      <Route path='/items/:itemId/color/:color' render={props => {
        // NOTE to try this route demo go to navigator route => http://localhost:3000/#/items/1239711293712389/color/orange
        // props.match.params.itemId
        // props.match.params.color

        const { match: { params: { itemId, color } } } = props

        return <Detail itemId={itemId} color={color} />
      }} />

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
})
