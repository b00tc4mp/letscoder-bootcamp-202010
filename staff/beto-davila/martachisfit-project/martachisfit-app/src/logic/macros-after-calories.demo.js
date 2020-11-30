const macrosAfterCalories = (totalCalories, callback) => {

    if (totalCalories) {
    
    const _carbs = Math.floor((totalCalories * 0.4) / 4)
    const _protein = Math.floor((totalCalories * 0.3) / 4)
    const _fats = Math.floor((totalCalories * 0.3) / 9)

    const macros = {
        carbs: _carbs,
        protein: _protein,
        fats: _fats
    }

    return callback(macros)

} else
    return callback(new Error('There was an error calculating macronutrients'))
}

macrosAfterCalories(undefined, console.log)