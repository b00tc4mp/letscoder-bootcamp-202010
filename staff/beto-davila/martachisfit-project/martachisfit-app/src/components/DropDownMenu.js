import './styles/DropDownMenu.sass'

// export default function DropDownMenu ({onGoToRecipes, onGoToUserDiet, onGoToDietDesign, onGoToProfile, onGoToBlog}) {
//     return <nav>
//         <div className="navbar">
//             <a href="#recipes" onClick={onGoToRecipes}>Recetas</a>
//             <a href="#diet" onClick={onGoToDietDesign}>Diseña tu dieta</a>
//             <div className="dropdown">
//                 <button onClick={onGoToUserDiet} className="dropdown__btn">Te ofrecemos....
//                 <i className="fa fa-caret-down"></i>
//                 </button>
//                 {/* <div className="dropdown__content">
//                 <a href="#" onClick={onGoToKeto}>'Keto'</a>
//                 <a href="#" onClick={onGoToMediterranean}>Mediterránea</a>
//                 <a href="#" onClick={onGoToVegan}>Vegana</a>
//                 </div> */}
//             </div>
//             <a href="#blog" onClick={onGoToBlog}>Blog</a> 
//             <a href="#profile" onClick={onGoToProfile}>Perfil</a> 
//         </div>
//     </nav>
// }

export default function DropDownMenu ({onGoToRecipes, onGoToUserDiet, onGoToDietDesign, onGoToProfile, onGoToBlog, onGoToWelcome}) {
    return <><div className="navbar">
                <label className="toggle" htmlFor="toggle">&#9776;</label>
                <input type="checkbox" id="toggle" className="toggle__input"></input>
                <div className="menu">
                    <a className="menu__link" href="#" onClick={onGoToWelcome}>¡Bienvenid@!</a>
                    <a className="menu__link" href="#" onClick={onGoToRecipes}>Recetas</a>
                    <a className="menu__link" href="#" onClick={onGoToDietDesign}>Diseña tu dieta</a>
                    <a className="menu__link" href="#" onClick={onGoToUserDiet}>Te ofrecemos....</a>
                    <a className="menu__link" href="#" onClick={onGoToBlog}>Blog</a> 
                    <a className="menu__link" href="#" onClick={onGoToProfile}><span className="menu__profile">Mi perfil</span></a> 
                </div>
            </div>
    </>
}