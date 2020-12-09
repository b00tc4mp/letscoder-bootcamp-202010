import { SignUp, SignIn, Home, MainSearch } from './components'
import { registerUser, authenticateUser, findPets } from './logic'
import { Route, withRouter, Redirect } from 'react-router-dom'
import SearchPets from './components/SearchPets'

export default withRouter(props => {

  const handleSignUp = (userName, email, password, address, city, phone, description) => {
    try {
      registerUser(userName, email, password, address, city, phone, description, error => {
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

  const handleGoToMainSearch = () => {

    props.history.push('/mainSearch')
  }

  const handleSearchPets = (queryShelter, city, queryPet, species, breed) => {
    try {

        findPets(queryShelter || undefined, city || undefined, queryPet || undefined, species || undefined, breed || undefined)
            .then(console.log)
            .catch(alert)
    } catch(error) {
        alert(error)
    }
}

  const { token } = sessionStorage

  return (
    <div className="App">
      <header className="App-header">

      <Route path='/sign-up' render={() => token ? <Redirect to="/" /> : <SignUp onSignUp={handleSignUp} />} />
      <Route path='/sign-in' render={() => token ? <Redirect to="/" /> : <SignIn onSignIn={handleSignIn} onGoToMainSearch = {handleGoToMainSearch}/>} />
      <Route exact path='/' render={() => token ? <Home /> : <Redirect to="/sign-in" />} />
      <Route path='/mainSearch' render = {()=> <SearchPets onSearch= {handleSearchPets}/> }/>
      

      </header>
    </div>
  );
})
