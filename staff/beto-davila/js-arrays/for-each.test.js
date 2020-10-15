console.log('TEST forEach');

console.log('This demo says hello to EACH person in the array and returning the result to console');

var names = ['aida','alberto','nico','caterina','toño'];

var result = [];

forEachFunction(names, sayHello);

function sayHello(name) { 

    return result.push('Hello ' + name);

}

console.assert(result.length === names.length);

for (var i = 0; i < result.length; i++) {
    console.assert(result[i] === 'Hello ' + names[i]);

}

var _error;


try {
    forEachFunction(null, callback);
} catch (error) {
    _error = error;
}

console.assert(_error !== undefined);
console.assert(_error.message === 'null is not an array');

var _error;

try {
    forEachFunction(1, callback);
} catch (error) {
    _error = error;
}

console.assert(_error !== undefined);
console.assert(_error.message === '1 is not an array');



