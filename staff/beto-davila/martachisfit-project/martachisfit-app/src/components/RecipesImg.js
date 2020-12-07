// import ReactMarkdown from 'react-markdown'
// import './styles/RecipesImg.sass'

export default function RecipesImg ({recipesImg}) {

    const { data } = recipesImg

    return <> <section className="recipes-img">
    {/* <div className="article__btns">
        <button onClick={() => onSaveArticle(_id)} className="article__read-later-btn article__btn">Leer más tarde</button>
        <button onClick={onGoToRandomArticle} className="article__read-other-btn article__btn">Muéstrame otro</button>
    </div> */}
    {recipesImg && <img alt="recipe-pic" src={data}></img>}
    </section>
    {/* {message && <p className="article__added">¡Artículo añadido en su <a onClick={onGoToProfile} href="#profile">perfil</a>!</p>} */}
    {/* <article className="article">
    <ReactMarkdown source={text} />
    </article> */}
    </>
}
