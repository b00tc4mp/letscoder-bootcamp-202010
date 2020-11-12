var ingredients = ['salt', 'oil', 'vinegar', 'tomato', 'broccoli'];

function buildingPop(arr) {
     

    var element = arr[arr.length - 1];

    for (var i = 0; i < arr.length; i++) { 
        
        if  (i == arr.length - 1) {

            arr.length = arr.length - 1;

            return element;

        }       
    }
    
}

buildingPop(ingredients);