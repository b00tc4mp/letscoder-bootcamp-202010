import ReactMarkdown from 'react-markdown'
import './styles/Workout.sass'
import redHeart from '../components/icons/heart-red.png'
import emptyHeart from '../components/icons/heart-empty.png'
import { Feedback } from '../components/index'

export default function Workout({ source, onGoToMovements, onSaveWorkout, saved, error }) {

    const { layout, daysWeek, setsWeek, name, level, description, id } = source

    return <>
        <div className="workout-pseudo">
            <div className="workout">
                <a onClick={onGoToMovements} className="workout__movements">Movimientos</a>
                <button className="workout__heart-btn" onClick={() => onSaveWorkout(id)}>{saved ? <img src={redHeart} alt="red-heart"></img> : <img src={emptyHeart} alt="empty-heart"></img>}</button>
                {error && <Feedback error={error}></Feedback>}
                <h3 className="workout__name">{name}</h3>
                <div className="workout__header">
                    <p><span className="bold">Nivel</span> {level}</p>
                    <p><span className="bold">Días</span> {daysWeek}</p>
                    <p><span className="bold">Series</span> {setsWeek}</p>
                </div>
                {/* <button onClick={() => onSaveArticle(_id)} className="article__read-later-btn article__btn">Leer más tarde</button> */}
                <div className="workout__description">
                    <ReactMarkdown source={description} />
                </div>
                <article className="workout__layout">
                    <ReactMarkdown source={layout} />
                </article>
            </div>
        </div>
    </>
}

