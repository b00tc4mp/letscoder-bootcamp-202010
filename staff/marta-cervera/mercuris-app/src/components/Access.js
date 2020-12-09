import './Access.sass'
import {Link} from 'react-router-dom'

function Access({  onGoToSearch }){
    return <section className="access">

        
        <div className= "register">
        <h1 className="register__maintitle">Mercuris</h1>        
        <h1 className= "register__title">Register your Product</h1>
        <Link to = '/sign-up'>
        <button  className ="register__signup">Sign Up</button>
        </Link>
        <Link to = '/sign-in'>
        <button  className ="register__signin">Sign In</button>
        </Link>
        <h1 className="search__title">Search your favourite product</h1>
        <button onClick = {onGoToSearch} className="search__btn" >Search</button>
        
        </div>              

        
    </section>

}

export default Access

