console.log('Test Caray.prototype.splice()');

(function() {
    console.log(' should the new array contains the item "swift" instead of "python".');
    
    var c = new Caray();
    c.length = 5;

    c[0] = 'java';
    c[1] = 'typescript';
    c[2] = 'python';
    c[3] = 'javascript';
    c[4] = 'kotlin';

    var extracted = c.splice(2, 1, 'swift');

    console.assert(extracted.length === c.length, 'should the extracted result be the same length as the original array');
    console.assert(c[2] === 'swift', 'should the original item "python" be replaced by "swift" in the new array');
})();

(function() {
    console.log(' should the new array contains the item "swift" instead of "python".');
    
    var c = new Caray();
    c.length = 5;

    c[0] = 'java';
    c[1] = 'typescript';
    c[2] = 'python';
    c[3] = 'javascript';
    c[4] = 'kotlin';

    var extracted = c.splice(6, 1, 'swift');

    console.assert(extracted.length === c.length, 'should the extracted result be the same length as the original array');
    console.assert(c[2] === 'swift', 'should the original item "python" be replaced by "swift" in the new array');
})();