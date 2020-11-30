// import {caloriesCalc} from './index'

const caloriesCalc = (gender, goal, weight, height, age, activity, callback) => {

    if (gender === 'man') {
        const tmbMan = (10 * weight) + (6.25 * height) - (5 * age) +  5
        const totalCaloriesMan = tmbMan * (activity === 'sedentary'? 1.2 : 1.8)
        //return callback(Math.floor(totalCaloriesMan))
        if (goal === 'gain') return callback(Math.floor(totalCaloriesMan + 500))
        else if (goal === 'lose') return callback(Math.floor(totalCaloriesMan - 500))
        else if (goal === 'maintain') return callback(Math.floor(totalCaloriesMan))
    }
    else if (gender === 'woman') {
        const tmbWoman = (10 * weight) + (6.25 * height) - (5 * age) - 161
        const totalCaloriesWoman = tmbWoman * (activity === 'sedentary'? 1.2 : 1.8)
        // return callback(Math.floor(totalCaloriesWoman))
        if (goal === 'gain') return callback(Math.floor(totalCaloriesWoman + 500))
        else if (goal === 'lose') return callback(Math.floor(totalCaloriesWoman - 500))
        else if (goal === 'maintain') return callback(Math.floor(totalCaloriesWoman))
    }
    else
        return callback(new Error('wrong total calories calculation')) 
}

caloriesCalc('woman', 'maintain', 62, 155, 45, 'sedentary', console.log)