console.log('Test Caray.prototype.slice()');

(function () {
    console.log(' should be returned the elements "portugal" and "france" on a new array with no modifications of the original.');
    
    var c = new Caray();
    var newArr = new Caray();
    c.length = 5;
    newArr.length = 0;

    c[0] = 'spain';
    c[1] = 'portugal';
    c[2] = 'france';
    c[3] = 'ireland';
    c[4] = 'england';

    newArr = c.slice(1, 3);

    console.assert(newArr[0] === 'portugal', 'should the first item in the new array be "portugal"');
    console.assert(newArr[1] === 'france', 'should the second item in the new array be "france"');
    console.assert(newArr.length === 2, 'should the length of the new be 2');
})();

(function () {
    console.log(' should be returned the element "spain" on a new array with no modifications of the original.');
    
    var c = new Caray();
    var newArr = new Caray();
    c.length = 5;
    newArr.length = 0;

    c[0] = 'spain';
    c[1] = 'portugal';
    c[2] = 'france';
    c[3] = 'ireland';
    c[4] = 'england';

    newArr = c.slice(undefined, 1);

    console.assert(newArr[0] === 'spain', 'should the only item in the new array be "spain"');
    console.assert(newArr.length === 1, 'should the length of the new be 1');
})();

(function () {
    console.log(' should be returned the elements "portugal" and "france" on a new array with no modifications of the original.');
    
    var c = new Caray();
    var newArr = new Caray();
    c.length = 5;
    newArr.length = 0;

    c[0] = 'spain';
    c[1] = 'portugal';
    c[2] = 'france';
    c[3] = 'ireland';
    c[4] = 'england';

    newArr = c.slice(1, -2);

    console.assert(newArr[0] === 'portugal', 'should the first item in the new array be "portugal"');
    console.assert(newArr[1] === 'france', 'should the second item in the new array be "france"');
    console.assert(newArr.length === 2, 'should the length of the new be 2');
})();
