<<<<<<< HEAD
function Access( { onRegister, onLogin } ){
    return <> 
        <section className="access">
    <button className="access__register" onClick={onRegister} >Register</button>  <button className="access__login" onClick={onLogin} >Log In</button>
    </section>
    <p className="access__quote">"Paradise isn't a place. <br/>
    It's a feeling"</p>
    <p className="access__quote--name">-L.Boyer</p>
    </>
}
=======
function Access({ onRegister, onLogin}){
     return <><section className="access">
      <button className="access__register" onClick={onRegister} >Register</button>
      <button className="access__login" onClick={onLogin}>Log In</button>
    </section>
    <p className="access__quote">
      "Paradise isn't a place. <br />
      It's a feeling"
    </p>
    <p className="access__quote--name">- L. Boyer</p>
    </>
}

/* function Access(props){
     return <><section className="access">
      <button className="access__register" onClick={props.onRegister} >Register</button>
      <button className="access__login">Log In</button>
    </section>
    <p className="access__quote">
      "Paradise isn't a place. <br />
      It's a feeling"
    </p>
    <p className="access__quote--name">- L. Boyer</p>
    </>
} */

//pros es un objeto que tiene propiedades
// props = { onRegister; , name: "pepito", onLogin:}
>>>>>>> b9cb068fbe37e85b6b7932ead657f2e01b3779d2
