import './Access.sass'

function Access({ onGoToSignUp, onGoToSignIn, onGoToSearch }){
    return <section className="access">

        
        <div className= "register">
        <h1 className="register__maintitle">Mercuris</h1>        
        <h1 className= "register__title">Register your Product</h1>
        <button onClick = { onGoToSignUp} className ="register__signup">Sign Up</button>
        <button onClick= { onGoToSignIn} className ="register__signin">Sign In</button>
        <h1 className="search__title">Search your favourite product</h1>
        <button onClick = {onGoToSearch} className="search__btn" >Search</button>
        
        </div>

               

        
    </section>

}

export default Access

