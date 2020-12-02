(function() {
    // test pushear de uno en uno
    var reason1 = 'Caray length deberia ser 4';
    var reason2 = 'Index 0 deberia valer 1';
    var reason3 = 'Index 1 deberia valer "a"';
    var reason4 = 'Index 2 deberia valer true';
    var reason5 = 'Index 2 deberia valer true';
    var c = new Caray();
    c.push(1);
    c.push('a');
    c.push(true);
    c.push(null);
    conditionTest1 = c.length === 4;
    console.assert(conditionTest1, { c, reason1 });
    conditionTest2 = c[0] === 1;
    console.assert(conditionTest2, { c, reason2 });
    conditionTest3 = c[1] === 'a';
    console.assert(conditionTest3, { c, reason3 });
    conditionTest4 = c[2] === true;
    console.assert(conditionTest4, { c, reason4 });
    conditionTest5 = c[3] === null;
    console.assert(conditionTest5, { c, reason5 });
})();

(function() {
    // test pushear todos a la vez
    var reason1 = 'Caray length deberia ser 4';
    var reason2 = 'Index 0 deberia valer 1';
    var reason3 = 'Index 1 deberia valer "a"';
    var reason4 = 'Index 2 deberia valer true';
    var reason5 = 'Index 2 deberia valer true';
    var c = new Caray;
    c.push(1, 'a', true, null);
    conditionTest1 = c.length === 4;
    console.assert(conditionTest1, { c, reason1 });
    conditionTest2 = c[0] === 1;
    console.assert(conditionTest2, { c, reason2 });
    conditionTest3 = c[1] === 'a';
    console.assert(conditionTest3, { c, reason3 });
    conditionTest4 = c[2] === true;
    console.assert(conditionTest4, { c, reason4 });
    conditionTest5 = c[3] === null;
    console.assert(conditionTest5, { c, reason5 });
})();

(function() {
    // test randomizado
    var reason1 = 'caray length deberia ser 4';
    var reason2 = 'index 0 deberia valer 1 o 0';
    var reason3 = 'index 1 deberia valer "a" hasta la "f"';
    var reason4 = 'index 2 deberia valer true o false';
    var reason5 = 'index 2 deberia valer null or undefined';
    var c = new Caray;
    var v1 = Math.random();
    var v2 = ['a', 'b', 'c', 'd', 'e', 'f'].random();
    var v3 = Math.random() > .5 ? true : false;
    var v4 = Math.random() > .5 ? null : undefined;
    c.push(v1, v2, v3, v4);
    conditionTest1 = c.length === 4;
    console.assert(conditionTest1, { c, reason1 });
    conditionTest2 = c[0] === v1;
    console.assert(conditionTest2, { c, reason2 });
    conditionTest3 = c[1] === v2;
    console.assert(conditionTest3, { c, reason3 });
    conditionTest4 = c[2] === v3;
    console.assert(conditionTest4, { c, reason4 });
    conditionTest5 = c[3] === v4;
    console.assert(conditionTest5, { c, reason5 });
})();