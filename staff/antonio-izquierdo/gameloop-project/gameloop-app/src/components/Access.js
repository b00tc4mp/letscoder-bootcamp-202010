import './Access.sass'
import { Link } from 'react-router-dom'
import logo from "../assets/img/logo.png"

function Access( ) {
    return <section className="access">
       
        <img className="access__logo" src={logo} />
        <p> PAY LESS <br /> <br/> PLAY MORE</p>
        <div className="access__div">
            <Link to='/sign-up'>
                <button className="access__div__sign-up-button"> SIGN UP</button>
            </Link>
         
            <Link to='/sign-in'>
                <button className="access__div__sign-in-button"> SIGN IN</button>
            </Link>
        </div>
    </section>
}

export default Access