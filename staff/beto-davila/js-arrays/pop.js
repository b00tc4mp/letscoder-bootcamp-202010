
// Not complete. Needs to be reviewed.

var ingredients = ['salt', 'oil', 'viengar', 'tomato', 'broccoli'];

function pop(arr) {

    for (var i = 0; i < arr.length; i++) { 
        
        if (i = arr.length) {

            arr.length = arr.length - 1;

            return arr[i];

        }       
    }
}

function removeIngredient(ingredient) {

    return 'Bye, bye' + ingredient;
}

pop(ingredients, removeIngredient);