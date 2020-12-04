import "./Header.scss"

export default function ({onGoToUpdate, onGoToHome}) {
    
    return <header> 
    <div class="header__logo"></div>
  
     <div class="avatar">
     <button onClick = {onGoToUpdate} class="avatar__initials"><i class="fas fa-user-graduate fa-3x"></i></button>
    </div>
     <button onClick = {onGoToHome} class = "logo_puzzle"><i class="fas fa-puzzle-piece fa-3x"></i></button>
     
  
</header>
     
}