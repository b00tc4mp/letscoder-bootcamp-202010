import './styles/DropDownMenu.sass'


export default function DropDownMenu ({onGoToRecipes, onGoToUserDiet, onGoToDietDesign, onGoToProfile, onGoToBlog, onGoToWelcome, onGoToWorkouts}) {
    return <><div className="navbar">
                <label className="toggle" htmlFor="toggle">&#9776;</label>
                <input type="checkbox" id="toggle" className="toggle__input"></input>
                <div className="menu">
                    <a className="menu__link" href="#" onClick={onGoToWelcome}>¡Bienvenid@!</a>
                    <a className="menu__link" href="#" onClick={onGoToRecipes}>Recetas</a>
                    <a className="menu__link" href="#" onClick={onGoToWorkouts}>Entrenamiento</a>
                    <a className="menu__link" href="#" onClick={onGoToDietDesign}>Diseña tu dieta</a>
                    <a className="menu__link" href="#" onClick={onGoToUserDiet}>A tu elección</a>
                    <a className="menu__link" href="#" onClick={onGoToBlog}>Blog</a> 
                    <a className="menu__link" href="#" onClick={onGoToProfile}><span className="menu__profile">Mi perfil</span></a> 
                </div>
            </div>
    </>
} 
