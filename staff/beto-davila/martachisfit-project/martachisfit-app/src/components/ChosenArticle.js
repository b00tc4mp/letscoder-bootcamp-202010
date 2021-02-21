import ReactMarkdown from 'react-markdown'
import { Feedback } from '.'
import './styles/Articles.sass'

export default function ChosenArticle ({source, message, onReadArticle, error}) {

    const { text, title, urlPathImg, id } = source
    return <>
    <div className="article-pseudo">
    <div>
    <button onClick={() => onReadArticle(id)} className="article__already-read-btn article__btn">¿Leído?</button>
    {message && <p className="article__read-already-feedback">¡Leído!</p>}
    {error && <Feedback error={error}></Feedback>}
    </div>
    <article className="article">
    <h3 className="article__title-article">{title}</h3>
    <img src={urlPathImg} alt="article-img" width="280px"/>
    <ReactMarkdown source={text} />
    </article>
    </div>
    </>
}

