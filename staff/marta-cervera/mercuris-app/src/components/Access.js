import './Access.sass'
import {Link} from 'react-router-dom'

function Access({  onGoToSearch }){
    return <div className="access">        
        <h1 className="access__maintitle">Mercuris</h1>        
        <div className= "access__register">        
        <h1 className= "access__register__title">Register your Product</h1>
        <Link to = '/sign-up'>
        <button  className ="access__register__signup">Sign Up</button>
        </Link>
        <Link to = '/sign-in'>
        <button  className ="access__register__signin">Sign In</button>
        </Link>
        </div>
        <div>
        <h1 className="access__search__title">Search your favourite product</h1>
        <button onClick = {onGoToSearch} className="search__btn" >Search</button>
        </div>
                     

        
    </div>

}

export default Access

