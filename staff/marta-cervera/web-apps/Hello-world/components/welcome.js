function mountWelcome(username = 'username') {

    var container = mountContainer(`<section class="welcome">
    <h2>Welcome to Hello World App ${username} !</h2>)
</section>`) 
    
return container
}

//template string. user name es un valior falsy, le da un valir por defecto, 
//template estring se le hace username o el n