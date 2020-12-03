import ReactMarkdown from 'react-markdown'

export default function HelloWorld ({input}) {
    return <>
    <article className="article">
    <button className="article__read-later-btn">Leer más tarde</button>
    <ReactMarkdown source={input} />
    </article>
    </>
}

