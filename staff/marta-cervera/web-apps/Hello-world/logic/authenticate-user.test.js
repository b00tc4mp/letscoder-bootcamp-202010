(function () {
    console.log('TEST authenticateUser()');

    (function () {
        console.log(' should succeed on existing user')

        var fullname = 'John Doe ' + Math.random()
        var email = 'johndoe-' + Math.random() + '@mail.com'
        var password = 'pass-' + Math.random()

        call("POST",
            "https://b00tc4mp.herokuapp.com/api/v2/users/auth",
            { "Content-type": "application/json" },
            '{ "username": "' +
              email +
              '", "password" : "' +
              password +
              '" }',
            function (status, response) {
                if (status ==201)
                authenticateUser(email,password,function(error,token){
                   
                    console.log("should authenticate the user")
                    console.assert(!error, 'should not return error when autenticate')
                    console.assert(token, 'should return a token when autenticate')
                    
                    call('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users',
                            {
                                'Authorization': 'Bearer ' + token,
                                'Content-type': 'application/json'
                            },
                            '{ "password": "' + password + '" }',
                            function (status, response) {
                                console.assert(status === 204, 'should status be 204')
                                console.assert(response.length === 0, 'should response be empty')
                            }
                        )


                })
              
            
            }


        )
        })
        
    })();///codigo de console, asser te van a evaluar antes de la respuesta, hay que forzarlo. mensaje de error es un error asincrono, ha devuelto un 401. Error 400 es un error valido, una respuesta que el servidor sabe tiene que devolver


    (function () {
        console.log(" should fail on non-exisiting user")

        var email = "johndoe-" + Math.random() + '@mail.com';
        var password = "pass-" + Math.random()

        var fail

        authenticateUser(email, password + 'wrong', function (error) {
            console.assert(error instanceof Error, " error should be defined and instance of Error")
            console.assert(error.message, " wrong credentials", 'should error essage match expected')
        console.log("should no authenticate the user")

        call('POST',
        'https://b00tc4mp.herokuapp.com/api/v2/users',
        {'Content-type': 'application/json'}, 
        '{"fullname":"'+ fullname +'","username":"'+ email + '","password": "'+ password +'"}', 
        function(status, response) {
            if (status === 201)
            callback(undefined)
        
        })

        });

    })();

    (function () {
        console.log(' should fail on wrong email');

        var email = 'johndoe-' + Math.random() + '@mail.com';
        var password = 'pass-' + Math.random();

        authenticateUser('-wrong' + email, password, function (error) {
            console.assert(error instanceof Error, 'should  error be defined and instace of Error');
            console.assert(error.message === 'username and/or password wrong', 'should error message match expected');

        });

    })();

    (function () {
        console.log(' should fail on non-string email')

        var email = [1, true, null, undefined, {}, [], function () { }, new Date].random()
        var password = 'pass-' + Math.random()

        var fail

        try {
            authenticateUser(email, password)
        } catch (error) {
            fail = error
        }

        console.assert(fail instanceof TypeError, 'should error be defined and an instance of TypeError')
        console.assert(fail.message === email + ' is not an e-mail', 'should error message match expected')
    })();

    (function () {
        console.log(' should fail on empty or blank email')

        var email = ['', ' ', '\t', '\n'].random()
        var password = 'pass-' + Math.random()

        var fail

        try {
            authenticateUser(email, password)
        } catch (error) {
            fail = error
        }

        console.assert(fail instanceof Error, 'should error be defined and an instance of TypeError')
        console.assert(fail.message === 'e-mail is empty or blank', 'should error message match expected')
    })();

    (function () {
        console.log(' should fail invalid email')

        var email = ['john-doe#mail.com', '@mail.com', 'johh-doe@mail', 'john-doe@'].random()
        var password = 'pass-' + Math.random()

        var fail

        try {
            authenticateUser(email, password)
        } catch (error) {
            fail = error
        }

        console.assert(fail instanceof Error, 'should error be defined and an instance of TypeError')
        console.assert(fail.message === 'invalid e-mail', 'should error message match expected')
    })();

    (function () {
        console.log(' should fail on non-string password')

        var email = 'johndoe-' + Math.random() + '@mail.com'
        var password = [1, true, null, undefined, {}, [], function () { }, new Date].random()

        var fail

        try {
            authenticateUser(email, password)
        } catch (error) {
            fail = error
        }

        console.assert(fail instanceof TypeError, 'should error be defined and an instance of TypeError')
        console.assert(fail.message === password + ' is not a password', 'should error message match expected')
    })();

    (function () {
        console.log(' should fail on empty or blank password')

        var email = 'johndoe-' + Math.random() + '@mail.com'
        var password = ['', ' ', '\t', '\n'].random()

        var fail

        try {
            authenticateUser(email, password)
        } catch (error) {
            fail = error
        }

        console.assert(fail instanceof Error, 'should error be defined and an instance of TypeError')
        console.assert(fail.message === 'password is empty or blank', 'should error message match expected')
    })();

    // TODO implement unit test cases








//quien invoca el proceso el autenticare y nos lleva al call y solo cuando el call se ha resuelto vuelve para atras
//cadena de acciones y tiene que cumplirse en un orden y el elemento primario es el mas alejado
//el test dispara la funcion y la ultima es la primara que hac algo y tira para atras y me la ha pedido el de antes

//