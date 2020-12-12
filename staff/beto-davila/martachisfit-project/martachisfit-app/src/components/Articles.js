import ReactMarkdown from 'react-markdown'
import { Feedback } from '.'
import './styles/Articles.sass'

export default function Articles ({source, onGoToRandomArticle, onSaveArticle, onGoToProfile, message, error}) {

    const { text, id, urlPathImg, title } = source

    return <>
    <div className="article-pseudo">
    <h2 className="article__title-general">Artículo del día</h2>
    <div className="article__btns">
        <button onClick={() => onSaveArticle(id)} className="article__read-later-btn article__btn">Leer más tarde</button>
        <button onClick={onGoToRandomArticle} className="article__read-other-btn article__btn">Muéstrame otro</button>
        {error && <Feedback error={error}></Feedback>}
    </div>
    {message && <p className="article__added">¡Artículo añadido en su <a onClick={onGoToProfile} href="#">perfil</a>!</p>}
    <article className="article">
    <h3 className="article__title-article">{title}</h3>
    <img src={urlPathImg} alt="article-img" width="280px"/>
    <ReactMarkdown source={text} />
    </article>
    </div>
    </>
}

