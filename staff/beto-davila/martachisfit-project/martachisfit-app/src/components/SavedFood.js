import './styles/SavedFood.sass'

export default function SavedFood ({ food, onDelete, message }) {

    return <section className="saved-food">
        {food && food.length && 
        <ul>
        {food.map(({ name, calories, carbs, protein, fats, _id }) => <li key={_id} className="saved-food__food">
        <div className="saved-food__block">
            <p><span className="saved-food__name">{name}</span></p><p>{calories} Kcal</p><p>{carbs} gr.</p><p>{protein} gr.</p><p>{fats} gr.</p>
            {<a onClick={event => {
                event.stopPropagation()

                onDelete(_id)
                }} className="saved-food__delete" href="#">Borrar</a>}
        </div>
        </li>)}
    </ul>}
    <p className="saved-food__total">Total kcal</p>
    {message && <p className="saved-food__deleted">¡Registro borrado!</p>}
    {/* {food.reduce((a, {calories}) => a + calories, 0)} */}
    </section>
}