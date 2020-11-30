import { SignUp, SignIn} from './components'
import { useState } from 'react'
//import { registerUser } from './logic'


function App() {
  const [view, setView] = useState('sign-up')

 /*  const handleSignUp = (fullname, email, password, address, city, phone) => {
    registerUser(fullname, email, password, address, city, phone, error => {
      if (error) return alert(error.message)

      setView('sign-in')
    })
  }
 */


  return (
    <div className="App">
      <header className="App-header">

    {view === 'sign-up' && <SignUp  />}
    {view === 'sign-in' && <SignIn />}


      </header>
    </div>
  );
}

export default App;
