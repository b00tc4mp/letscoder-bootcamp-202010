import './Access.sass'

function Access({ onGoToSignUp, onGoToSignIn, onGoToSearch }){
    return <section className="access">

        
        <div className= "register">
        <h1 className="register__maintitle">Mercuris</h1>        
        <h1 className= "register__title">Register your Product</h1>
        <button onClick = { onGoToSignUp} className ="register__signup">Sign Up</button>
        <button onClick= { onGoToSignIn} className ="register__signin">Sign In</button>
        </div>

        <div className="search">
            <h1 className="search__title">Search your favourite product</h1>
            <button onClick = {onGoToSearch} className="search__btn" >Search</button>

        </div>      

    

    </section>

}

export default Access


{/* <p className="signUp__p">Already have an account? <span className="signUp__span" onClick={onGoToSignIn}>Sign In</span></p> */}