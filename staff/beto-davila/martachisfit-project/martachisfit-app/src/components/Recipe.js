import ReactMarkdown from 'react-markdown'
import './styles/Recipe.sass'
import redHeart from '../components/icons/heart-red.png'
import emptyHeart from '../components/icons/heart-empty.png'
import { Feedback } from '.'

export default function Recipe ({source, like, onSaveRecipe, error}) {

    const { text, id, title, urlPathImg } = source

    return <>
    <div className="recipe__btns">
        {/* <button onClick={() => onSaveRecipe(id)} className="recipe__read-later-btn recipe__btn">Añadir a mi colección</button> */}
    <button className="recipe__heart-btn" onClick={() => onSaveRecipe(id)}>{like ? <img src={redHeart} alt="red-heart"></img> : <img src={emptyHeart} alt="empty-heart"></img>}</button>
    {error && <Feedback error={error}></Feedback>}
    </div>
    {/* {message && <p className="recipe__added">¡Receta añadida en su <a onClick={onGoToProfile} href="#profile">perfil</a>!</p>} */}
    <article className="recipe">
    {source && <ReactMarkdown className="recipe__title" source={title} />}
    <img className="recipe__img" alt="tronco-navidad" src={urlPathImg} height="240" width="320" ></img>
    {source && <ReactMarkdown source={text} />}
    </article>
    </>


}

