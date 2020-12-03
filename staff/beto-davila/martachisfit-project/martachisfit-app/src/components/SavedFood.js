import './styles/SavedFood.sass'

export default function SavedFood ({ food }) {

    // const addObj = (arr, prop) => {
    //     let sum = arr.reduce((a, {prop}) => a + prop, 0)
    //     return sum
    // }

    return <section className="saved-food">
        {food && food.length && <ul>
        {food.map(({ name, calories, carbs, protein, fats, _id }) => <li key={_id} className="saved-food__food">
        <div className="saved-food__block">
            <p>{name}</p><p>{calories} Kcal</p><p>{carbs} gr.</p><p>{protein} gr.</p><p>{fats} gr.</p>
        </div>
        </li>)}
    </ul>}
    <p>Total kcal alimentos escogidos </p><p> </p>
    {/* {food.reduce((a, {calories}) => a + calories, 0)} */}
    </section>
}