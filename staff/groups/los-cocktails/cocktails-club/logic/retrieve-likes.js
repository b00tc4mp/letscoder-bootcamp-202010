function retrieveLikes(token, callback) {
    let counter = 0
    var results = []
    call('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users', { Authorization: `Bearer ${token}` }, '',
        (status, response) => {
            if (status === 200) {
                const { likes = [] } = JSON.parse(response)
                if (likes.length)
                    likes.forEach(id => {

                        call('GET', `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`, {}, '',
                            (status, response) => {
                                if (status === 200) {

                                    if (response === '') {
                                        counter = counter + 1
                                    } else {
                                        var res = JSON.parse(response)
                                        var drinks = res.drinks
                                        drinks.forEach(item => item.like = likes.includes(item.idDrink))
                                        drinks = drinks.map(
                                            ({
                                                like,
                                                idDrink: id,
                                                strDrink: name,
                                                strInstructions: instructions,
                                                strInstructionsES: instructionsES,
                                                strAlcoholic: alcoholic,
                                                strGlass: glass,
                                                strDrinkThumb: image,
                                                strIngredient1: ing1,
                                                strIngredient2: ing2,
                                                strIngredient3: ing3,
                                                strIngredient4: ing4,
                                                strIngredient5: ing5,
                                                strIngredient6: ing6,
                                                strIngredient7: ing7,
                                                strMeasure1: m1,
                                                strMeasure2: m2,
                                                strMeasure3: m3,
                                                strMeasure4: m4,
                                                strMeasure5: m5,
                                                strMeasure6: m6,
                                                strMeasure7: m7,
                                            }) => ({
                                                like,
                                                id,
                                                name,
                                                instructions,
                                                instructionsES,
                                                alcoholic,
                                                glass,
                                                image,
                                                ing1,
                                                ing2,
                                                ing3,
                                                ing4,
                                                ing5,
                                                ing6,
                                                ing7,
                                                m1,
                                                m2,
                                                m3,
                                                m4,
                                                m5,
                                                m6,
                                                m7,
                                            })
                                        );
                                        //destructuring del item

                                        results[results.length] = drinks[0]
                                        counter = counter + 1
                                        // results.length++

                                        if (likes.length === counter) {
                                                callback(null, results)
                                            
                                        }
                                    }
                                }

                            })
                    }
                    )
                else callback(null, results)
                // setTimeout(function(){
                //     console.log('hola')
                // console.log('91')
                // }, 5 * 1000)

            } else {
                var res = JSON.parse(response);

                callback(new Error(res.error));
            }
        })


}
