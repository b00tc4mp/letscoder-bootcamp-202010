
console.log("REDUCE (w/for) - Guessing out how old they are all together")

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];



//Queremos averiguar la edad total del grupo -array-

//Con el for



ageSum = 0; 

for (var i = 0; i < ages.length; i++)
{ageSum += ages[i]}; 

console.log(ageSum); 

