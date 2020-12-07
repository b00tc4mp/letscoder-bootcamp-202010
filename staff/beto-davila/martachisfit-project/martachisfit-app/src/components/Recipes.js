import ReactMarkdown from 'react-markdown'
import './styles/Recipes.sass'

export default function Recipes ({source, onGoToRandomRecipe, onSaveRecipe, onGoToProfile, message}) {

    const { text, id, title } = source

    return <>
    <div className="recipe__btns">
        <button onClick={() => onSaveRecipe(id)} className="recipe__read-later-btn recipe__btn">Añadir a mi colección</button>
        <button onClick={onGoToRandomRecipe} className="recipe__read-other-btn recipe__btn">Muéstrame otra</button>
    </div>
    {message && <p className="recipe__added">¡Receta añadida en su <a onClick={onGoToProfile} href="#profile">perfil</a>!</p>}
    <article className="recipe">
    {source && <ReactMarkdown className="recipe__title" source={title} />}
    <img className="recipe__img" alt="tronco-navidad" src="https://fakeimg.pl/350x200/ff0000,128/000,255"></img>
    {source && <ReactMarkdown source={text} />}
    </article>
    </>
}

