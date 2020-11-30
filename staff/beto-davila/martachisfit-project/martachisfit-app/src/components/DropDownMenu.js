import './DropDownMenu.sass'

export default function DropDownMenu ({onGoToRecipes, onGoToDietDesign}) {
    return <nav>
        <div className="navbar">
            <a href="#recipes" onClick={() => onGoToRecipes}>Recetas</a>
            <a href="#articles">Artículos</a>
            <a href="#dieta" onClick={() => onGoToDietDesign}>Diseña tu dieta</a>
            <div className="dropdown">
                <button className="dropdown__btn">¡Más cosas!
                <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown__content">
                <a href="#">Rutinas de entrenamiento</a>
                <a href="#">Sobre Martachis</a>
                <a href="#">Contacto</a>
                </div>
            </div> 
        </div>
    </nav>
}