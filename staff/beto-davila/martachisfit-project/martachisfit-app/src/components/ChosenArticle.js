import ReactMarkdown from 'react-markdown'
import './styles/Articles.sass'

export default function ChosenArticle ({source, onReadArticle, message}) {

    const { text, _id } = source
    return <>
    <button onClick={() => onReadArticle(_id)} className="article__read-later-btn article__btn">¿Leído?</button>
    {message && <p className="article__read">¡Artículo leído!</p>}
    <article className="article">
    <ReactMarkdown source={text} />
    </article>
    </>
}

