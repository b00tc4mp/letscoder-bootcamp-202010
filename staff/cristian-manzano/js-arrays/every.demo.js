console.log('DEMO every')


nums = [3, 3, 2, 3, 3]
console.log('show if true or fals the numbers < or > than x', nums)



var result = every (nums, function(value){
    return value === 3;

})

console.log(result)


ages = [19, 25, 32, 45]

console.log('show if all the ages are equal or bigger than 18')

var result = every (ages, function(value){
    return value >= 18
})

console.log(result)
