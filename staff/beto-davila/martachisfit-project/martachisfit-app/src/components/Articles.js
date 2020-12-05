import ReactMarkdown from 'react-markdown'
import './styles/Articles.sass'

export default function Articles ({source, onGoToRandomArticle, onSaveArticle, onGoToProfile, message}) {

    const { text, _id } = source

    return <>
    <div className="article__btns">
        <button onClick={() => onSaveArticle(_id)} className="article__read-later-btn article__btn">Leer más tarde</button>
        <button onClick={onGoToRandomArticle} className="article__read-other-btn article__btn">Muéstrame otro</button>
    </div>
    {message && <p className="article__added">¡Artículo añadido en su <a onClick={onGoToProfile} href="#profile">perfil</a>!</p>}
    <article className="article">
    <ReactMarkdown source={text} />
    </article>
    </>
}

