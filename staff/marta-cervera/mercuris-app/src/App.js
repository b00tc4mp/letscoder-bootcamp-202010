
import './App.css';
import { SignUp, SignIn, Home, Access, Header, Footer, SearchProductClient } from './components/Index'
import { useState } from 'react'
import { registerUser, authenticateUser } from './logic'


function App() {

  const [view, setView] = useState(sessionStorage.token ? 'home' : 'access')



  const handleSignUp = (name, email, password) => {
    try {
      registerUser(name, email, password, error => {
        if (error) return alert(error.message)

        setView('sign-in')
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

        setView('home')
      })
    } catch (error) {
      alert(error.message)
    }
  }

  const handleGoToSignIn = () => {

    setView('sign-in')
  }

  const handleGoToSignUp = () => {

    setView('sign-up')
  }

  const handleGoToSearch = () => {

    setView('search')
  }

  return (
    <>
      <Header></Header>
      <main className="App-header">
        {view === 'access' && <Access onGoToSignIn={handleGoToSignIn} onGoToSignUp={handleGoToSignUp} onGoToSearch={handleGoToSearch} />}
        {view === 'sign-up' && <SignUp onSignUp={handleSignUp} />}
        {view === 'sign-in' && <SignIn onSignIn={handleSignIn} />}
        {view === 'search' && <SearchProductClient />}
        {view === 'home' && <Home />}
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
