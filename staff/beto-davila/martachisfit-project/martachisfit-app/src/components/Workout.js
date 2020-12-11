import ReactMarkdown from 'react-markdown'
import './styles/Workout.sass'

export default function Workout ({source}) {

    const { layout, daysWeek, setsWeek, name, level, description } = source

    return <>
    <div className="workout-pseudo">
    <div className="workout">
    <h3 className="workout__name">{name}</h3>
        <div className="workout__header">
            <p><span className="bold">Nivel</span> {level}</p>
            <p><span className="bold">Días</span> {daysWeek}</p>
            <p><span className="bold">Series</span> {setsWeek}</p>
        </div>
        {/* <button onClick={() => onSaveArticle(_id)} className="article__read-later-btn article__btn">Leer más tarde</button> */}
    <div className="workout__description">
    <ReactMarkdown source = {description} />
    </div>
    <article className="workout__layout">
    <ReactMarkdown source = {layout} />
    </article>
    </div>
    </div>
    </>
}

