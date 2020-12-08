import ReactMarkdown from 'react-markdown'
import './styles/Recipe.sass'

export default function Recipe ({source, onSaveRecipe, onGoToProfile, message}) {

    const { text, id, title, urlPathImg } = source

    return <>
    <div className="recipe__btns">
        <button onClick={() => onSaveRecipe(id)} className="recipe__read-later-btn recipe__btn">Añadir a mi colección</button>
    </div>
    {message && <p className="recipe__added">¡Receta añadida en su <a onClick={onGoToProfile} href="#profile">perfil</a>!</p>}
    <article className="recipe">
    {source && <ReactMarkdown className="recipe__title" source={title} />}
    <img className="recipe__img" alt="tronco-navidad" src={urlPathImg} height="240" width="320" ></img>
    {source && <ReactMarkdown source={text} />}
    </article>
    </>


}

