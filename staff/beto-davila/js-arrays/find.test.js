
console.log('Testing FIND method');

var years = [2002, 1986, 2005, 1999, 2020, 1998]; 

find(isFromTheNineties, years); 

function isFromTheNineties (year) {  
    
    var result;

    if (year < 2000 && year > 1989) {
        return result = year;

    } else {

        return undefined;
    }
}

console.assert(result === true);

var fail;

try {
    find(null, isFromTheNineties);
} catch (error) {
    fail = error;
}

console.assert(fail !== undefined, 'error should be defined');
console.assert(fail.message === 'should fail when passing a null as an array', 'error message should match');

var fail;

try {
    find(1, isFromTheNineties);
} catch (error) {
    fail = error;
}

console.assert(fail !== undefined, 'error should be defined');
console.assert(fail.message === '1 is not an array', 'error message should match');

