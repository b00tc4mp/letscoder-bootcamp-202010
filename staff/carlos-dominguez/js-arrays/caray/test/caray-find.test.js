(function() {
    var reason1 = 'Deberia devolver ordenador';
    var ordenador = { item: "ordenador", precio: 140 };
    var lampara = { item: "lampara", precio: 80 };
    var coche = { item: "coche", precio: 480 };
    var c = new Caray(ordenador, lampara, coche);
    var findCallback = function(element) {
        return element.precio > 100;
    }
    var result = c.find(findCallback);
    conditionTest1 = result === ordenador;
    console.assert(conditionTest1, { result, ordenador, reason1 });
})();
