import { validateCallback } from './helpers/validations';

const caloriesCalc = (gender, goal, age, height, weight, activity, callback) => {

    if(typeof goal !== 'string') throw new TypeError (`${goal} is not a valid goal`)
    validateCallback(callback)

    if (gender === 'man' && goal) {
        const tmbMan = (10 * weight) + (6.25 * height) - (5 * age) +  5
        const totalCaloriesMan = tmbMan * (activity === 'sedentary'? 1.4 : 1.6 )
        //return callback(Math.floor(totalCaloriesMan))
        if (goal === 'gain')
            return callback(Math.floor(totalCaloriesMan + 250))
        else if(goal === 'lose')
            return callback(Math.floor(totalCaloriesMan - 250))
        else if (goal === 'maintain')
            return callback(Math.floor(totalCaloriesMan))
    }
    else if (gender === 'woman' && goal) {
        const tmbWoman = (10 * weight) + (6.25 * height) - (5 * age) - 161
        const totalCaloriesWoman = tmbWoman * (activity === 'sedentary'? 1.4 : 1.6 )
        // return callback(Math.floor(totalCaloriesWoman))
        if (goal === 'gain')
            return callback(Math.floor(totalCaloriesWoman + 250))
        else if(goal === 'lose')
            return callback(Math.floor(totalCaloriesWoman - 250))
        else if (goal === 'maintain')
            return callback(Math.floor(totalCaloriesWoman))
    }
    else
        return callback(new Error('wrong total calories calculation')) 
}
export default caloriesCalc;