
console.log('This demo FINDS the first year that belongs to the 90s.');

var years = [2002, 1986, 1991, 1999, 2020, 1998]; 

function isFromTheNineties (year) {  
    
    var result;

    if (year < 2000 && year > 1989) {
        return result = year;

    } else {

        return false;
    }
}

find(isFromTheNineties, years); 
