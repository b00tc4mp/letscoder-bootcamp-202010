import './styles/DropDownMenu.sass'


export default function DropDownMenu ({onGoToRecipes, onGoToUserDiet, onGoToDietDesign, onGoToProfile, onGoToBlog, onGoToWelcome, onGoToWorkouts}) {

    const handleDropdown = () => {
        document.getElementById("myDropdown").classList.toggle("show")
    }

    window.onclick = function(event) {
        if (!event.target.matches('.toggle__btn')) {
          let dropdowns = document.getElementsByClassName("menu");
          let i;
          for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }

    return <> <div className="navbar">
                <div className="dropdown">
                <button onClick={handleDropdown} id="toggle" className="toggle__btn">&#9776;</button>
                <div className="menu" id="myDropdown">
                    <a className="menu__link" href="#" onClick={onGoToWelcome}>¡Bienvenid@!</a>
                    <a className="menu__link" href="#" onClick={onGoToRecipes}>Recetas</a>
                    <a className="menu__link" href="#" onClick={onGoToWorkouts}>Entrenamiento</a>
                    <a className="menu__link" href="#" onClick={onGoToUserDiet}>A tu elección</a>
                    <a className="menu__link" href="#" onClick={onGoToDietDesign}>Diseña tu dieta</a>
                    <a className="menu__link" href="#" onClick={onGoToBlog}>Info y consejos</a> 
                    <span className="menu__link--profile"><a className="menu__link" href="#" onClick={onGoToProfile}><span className="menu__profile">Mi perfil</span></a></span> 
                </div>
                </div>
            </div>
    </>
} 
