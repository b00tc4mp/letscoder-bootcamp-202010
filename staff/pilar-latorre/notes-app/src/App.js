import logo from './logo.svg';
import './App.css';
import Register from './components/Register'

function App() {
    const handleRegister = (fullname, email, password) => {
      console.log(fullname, email, password)

      

    }

  return (
    <div className="App">
      <header className="App-header">
      <h1>Hello Pilar! </h1>

      <Register onRegister={handleRegister}/>

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
  );
}

export default App;
