const macrosAfterCalories = (totalCalories, callback) => {

    if (totalCalories) {
    
    const _carbs = Math.floor((totalCalories * 0.45) / 4)
    const _protein = Math.floor((totalCalories * 0.25) / 4)
    const _fats = Math.floor((totalCalories * 0.3) / 9)

    // const macros = {
    //     carbs: _carbs,
    //     protein: _protein,
    //     fats: _fats
    // }

    const caloriesMacros = {
        calories: totalCalories,
        carbs: _carbs,
        protein: _protein,
        fats: _fats
    }

    return callback(caloriesMacros)

} else
    return callback(new Error('There was an error calculating macronutrients'))
}

macrosAfterCalories(2500, console.log)