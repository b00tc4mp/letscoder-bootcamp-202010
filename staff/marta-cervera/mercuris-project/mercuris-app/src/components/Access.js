import './Access.sass'
import logo from "../assets/images/logo.jpg"
import {Link} from 'react-router-dom'

function Access({  onGoToSearch }){
    return <div className="access">               
        <img className="access__logo" src={logo} />   
        <div className= "access__register">        
        <h1 className= "access__register__title">RAISE YOUR PRODUCT</h1>
        <h2 className= "access__register__title2">Register your Company</h2>
        <Link to = '/sign-up'>
        <button  className ="access__register__signup">SIGN UP</button>
        </Link>
        <Link to = '/sign-in'>
        <button  className ="access__register__signin">SIGN IN</button>
        </Link>
        </div>
        <div className="access__search">
        <h1 className="access__search__title">Search your favourite product</h1>
        <button onClick = {onGoToSearch} className="access__search__btn" >SEARCH</button>
        </div>                  
    </div>
    
}

export default Access

