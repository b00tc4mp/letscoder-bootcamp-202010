console.log('Test Caray.prototype.join()');

(function() {
    console.log(' should JOIN all the elements from the given array into a string separated by a "+" sign.');
    debugger
     var c = new Caray();
     c.length = 3;

     c[0] = 'wind';
     c[1] = 'rain';
     c[2] = 'fire';

     var result = c.join(element, ' + ');

    console.assert(result === c[0] + ' + ' + c[1] + ' + ' + c[2], 'should the resul be "wind+rain+fire"');
    console.assert(separator === ' + ', 'should the sepatator be a "+" sign');
})();

(function() {
    console.log(' should JOIN all the elements from the given array into a string separated by a "," sign, being omitted the separator');
    debugger
    var c = new Caray();
    c.length = 3;

    c[0] = 'wind';
    c[1] = 'rain';
    c[2] = 'fire';

    var result = c.join(element);

   console.assert(result === c[0] + ',' + c[1] + ',' + c[2], 'should the result be "wind,rain,fire"');
   console.assert(separator === undefined, 'should the separator be undefined');
})();