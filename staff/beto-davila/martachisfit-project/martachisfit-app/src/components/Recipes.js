import ReactMarkdown from 'react-markdown'
import Feedback from './Feedback'
import './styles/Recipes.sass'

export default function Recipes ({ onGoToRecipe, source }) {

    return <section className="recipes">
        <div className="recipes-pseudo">
        <div className="recipes__intro">
            <h1 className="recipes__intro-title">Recetas saludables</h1>
            <p className="recipes__intro-description">No te pierdas las mejores recetas elaboradas con productos saludables y naturales, ¡dulces y saladas!</p>
        </div>
        {source && source.length && 
        <ul className="recipes__list">
        {source.map(({ _id, title, urlPathImg }) => <li key={_id} className="recipes__item">
            <div className="recipes__container">
                <ReactMarkdown className="recipes__title" source={title} />
                <img onClick={() => 

                    onGoToRecipe(_id)} className="recipes__img" alt="recipe-item" src={urlPathImg} height="200" width="275" />
            </div>
        </li>)}
    </ul>}
    </div>
    </section>


}

