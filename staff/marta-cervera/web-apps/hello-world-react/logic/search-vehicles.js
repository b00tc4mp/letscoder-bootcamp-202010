function searchVehicles(query, callback) {

    if (typeof query !== 'string') throw new TypeError(query + 'is not a query')

    if (!query.trim().length) throw new Error('query is empty or blank')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')




    call('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=${query}`,
        {}, '', function (status, response) {
            if (status === 200) {
                const res = JSON.parse(response)

                callback(null, res)

            } else callback(new Error('sorry, cannot search :('))



        })

}

//interpolar, dentro va a entrar una variable de fuera, va anetrar lo que va a entrar en el pirmer paramentro
//string final, 



// ahora, hay que pintar el corazon, es decir de todos loe vehiculos poner la propiedad like= true, de forma que al pintar el resultado, el componente de result, coger una popiedad del item, coger un coraxon rojo
//en result se hace los cambios com el button oncLcik, result funciona con like y no like, lo que se quiere es que cada item que se le pasa
//se busca los coches pero hay que maracarlo con los likes que tengo yo
//llamo a la API de usuarios, validar el token de usuarios, el search aha cambiado y requiere un parametro mas
//includes es un metdo que permite saber si es true o flase y si se incluye en el array
//cuando se retorne el callback retornara true o false