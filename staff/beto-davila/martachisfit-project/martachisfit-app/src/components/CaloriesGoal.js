// import './CaloriesGoal.sass'

function CaloriesGoal ({totalCalories, macros}) {
    return <> <h1>
        Calorías objetivo
    </h1>
    <h3>{totalCalories}</h3>

    <p>{macros.carbs} Carbohidratos</p>
    <p>{macros.protein} Proteins</p>
    <p>{macros.fats} Grasas</p>

    </>

}

export default CaloriesGoal