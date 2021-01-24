
console.log('This demo says hello to EACH person in the array and returning the result to console');

var names = ['aida','alberto','nico','caterina','toño'];

var result = [];

forEachFunction(names, sayHello);

function sayHello(name) { 

    result = 'Hello ' + name;

    console.log(result);

}