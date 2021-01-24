import "./Header.scss"

export default function ({onGoToUpdate, onGoToHome, onGoInitial}) {
    const token = sessionStorage.token
    return <header class = "header_home"> 
     <div class="avatar">
     <button onClick = {onGoInitial} class = "exit"><i class="fas fa-door-open fa-3x"></i></button>
     <button onClick = {onGoToUpdate} class="avatar__initials"><i class="fas fa-user-graduate fa-3x"></i></button>
    </div>
     <button onClick = {onGoToHome} class = "logo_puzzle"><img class = "logo_button" src = "imagenes/logo_button.png"/></button>
     
     
</header>
     
}