import './Access.sass'

function Access({ onGoToSignUp, onGoToSignIn, onGoToSearch }){
    return <section className="access">

        
        <div class= "register">
        <h1 class="register__maintitle">Mercuris</h1>        
        <h1 class= "register__title">Register your Product</h1>
        <button onClick = { onGoToSignUp} class ="register__signup">Sign Up</button>
        <button onClick= { onGoToSignIn} class ="register__signin">Sign In</button>
        </div>

        <div class="search">
            <h1 class="search__title">Search your favourite product</h1>
            <button onClick = {onGoToSearch} class="search__btn" >Search</button>

        </div>      

    

    </section>

}

export default Access


{/* <p className="signUp__p">Already have an account? <span className="signUp__span" onClick={onGoToSignIn}>Sign In</span></p> */}