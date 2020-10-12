var pepi = {
    name: 'Pepito',
    surname: 'Grillo',
    a: function() {
        return {
            b: {
                c: [
                    0, 1, 2, 'hello', 'world', 
                    function() { 
                        return {
                            d: ['a', 'b', function() { return 'Hello, World!'}]
                        } 
                    }
                ]
            }
        }
    }
}
undefined
pepi.a().b.c[5]().d[2]()
"Hello, World!"