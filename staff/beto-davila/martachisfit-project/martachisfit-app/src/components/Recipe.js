import ReactMarkdown from 'react-markdown'
import './styles/Recipe.sass'
import redHeart from '../components/icons/heart-red.png'
import emptyHeart from '../components/icons/heart-empty.png'
import { Feedback } from '.'

export default function Recipe({ source, like, onSaveRecipe, error, onGoToRecipes }) {

    const { text, id, title, urlPathImg } = source

    return <>
        <div className="recipe-pseudo">
            <div className="recipe__btns">
                <a className="recipe__back" onClick={onGoToRecipes}>Atrás</a>
                <div className="recipe__btns-heart-feedback">
                    {like ? <p className="recipe__feedback-btn">¡Me gusta!</p> : <p className="recipe__feedback-btn">¿Añadir?</p>}
                    <button className="recipe__heart-btn" onClick={() => onSaveRecipe(id)}>{like ? <img src={redHeart} alt="red-heart"></img> : <img src={emptyHeart} alt="empty-heart"></img>}</button>
                </div>
            </div>
            {error && <Feedback error={error}></Feedback>}
            {/* {message && <p className="recipe__added">¡Receta añadida en su <a onClick={onGoToProfile} href="#profile">perfil</a>!</p>} */}
            <article className="recipe">
                {source && <ReactMarkdown className="recipe__title" source={title} />}
                <img className="recipe__img" alt="tronco-navidad" src={urlPathImg} height="240" width="320" ></img>
                {source && <ReactMarkdown source={text} />}
            </article>
        </div>
    </>


}

