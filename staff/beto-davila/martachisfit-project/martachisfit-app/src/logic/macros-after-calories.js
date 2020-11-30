import { validateNumber, validateCallback } from './helpers/validations' 

const macrosAfterCalories = (totalCalories, callback) => {
    validateNumber(totalCalories)
    validateCallback(callback)

    if (totalCalories) {
    
    const _carbs = Math.floor((totalCalories * 0.4) / 4)
    const _protein = Math.floor((totalCalories * 0.3) / 4)
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
    return callback(new Error('error calculating macronutrients'))

}
export default macrosAfterCalories