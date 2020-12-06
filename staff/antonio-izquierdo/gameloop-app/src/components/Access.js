import './Access.sass'
import logo from "../assets/img/logo.png"

function Access({ onGoToSignIn, onGoToSignUp, onGoToSearch }) {
    return <section className="access">
        <img className="access__logo" src={ logo }/>
        <p> PAY LESS <br /> <br /> PLAY MORE</p>
        <div className="access__div">
            <button onClick={onGoToSignUp} className="access__div__signbutton"> SIGN UP </button>
            <button onClick={onGoToSearch} className="access__div__searchbutton"> SEARCH GAMES </button>
            <button onClick={onGoToSignIn} className="access__div__signbutton"> SIGN IN</button>
        </div>
    </section>
}

export default Access