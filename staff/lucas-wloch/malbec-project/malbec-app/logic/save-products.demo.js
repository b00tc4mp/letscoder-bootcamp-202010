function validateProductName(name){
    if (typeof name !== 'string') throw new TypeError(name + ' is not a name')

    if (!name.trim().length) throw new Error('name is empty or blank')
}

function validateProductDescription(description){
    if (typeof description !== 'string') throw new TypeError(description + ' is not a description')

    if (!description.trim().length) throw new Error('description is empty or blank')
}

function validateProductPrice(price){
    if (typeof price !== 'string') throw new TypeError(price + ' is not a price')

    if (!price.trim().length) throw new Error('price is empty or blank')
}

function validateProductGlutenFree(glutenFree){
    if (!(glutenFree === true || glutenFree === false)) throw new TypeError('glutenFree has to be true or false')
}

function validateProductVegan(vegan){
    if (!(vegan === true || vegan === false)) throw new TypeError('vegan has to be true or false')
}

function validateProductAlergenos(alergenos) {
    if (!(alergenos instanceof Array)) throw new TypeError(`${alergenos} is not an array`)

    alergenos.forEach(algIngredient => {
        if (typeof algIngredient !== 'string') throw new TypeError(algIngredient + ' is not a algIngredient')

        if (!algIngredient.trim().length) throw new Error('algIngredient is empty or blank')
    })

}

function validateProductCategory(category) {
    if (typeof category !== 'string') throw new TypeError(category + ' is not a category')

    if (!category.trim().length) throw new Error('category is empty or blank')

    if (!(category === 'entrantes-parrilla' || category === 'empanadas' || category === 'ensaladas' || category === 'parrilla' || category === 'pescados'
    || category === 'otras-sugerencias' || category === 'acompañamientos-guarniciones' || category === 'postres' || category === 'aguas-refrescos'
    || category === 'vinos' || category === 'cervezas')) throw new Error(`category ${category} does not exist`)

    // entrantes parrilla, empanadas, ensaladas, parrilla, pescados, otras sugerencias, acompañamientos/guarniciones, postres, aguas/refrescos
    // vinos, cervezas
}

function validateProductAvailable(available){
    if (!(available === true || available === false)) throw new TypeError('available has to be true or false')
}
function call(method, url, headers, body, callback) {
var xhr = new XMLHttpRequest

xhr.onreadystatechange = function () {
    if (this.readyState == 4)
        callback(this.status, this.responseText)
}

xhr.open(method, url)

for (var key in headers)
    xhr.setRequestHeader(key, headers[key])

xhr.send(body)
} 

function saveProducts(name, description, price, glutenFree, vegan, alergenos, category, available, callback) {
validateProductName(name)
validateProductDescription(description)
validateProductPrice(price)
validateProductGlutenFree(glutenFree)
validateProductVegan(vegan)
validateProductAlergenos(alergenos)
validateProductCategory(category)
validateProductAvailable(available)  


call('POST', 'http://localhost:3000/api/products', { 'Content-type': 'application/json' },
    JSON.stringify({ name, description, price, glutenFree, vegan, alergenos, category, available }),
    function(status, response) {
        if (status === 0) {
            return callback(new Error('server down'))
        } else if (status !== 201) {
            const { error } = JSON.parse(response)

            return callback(new Error(error))
        }
        callback(null)
    })
}

const name1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, exercitationem!"
const name2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, exercitationem!"
const name3 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, exercitationem!"
const name4 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, exercitationem!"
const name5 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, exercitationem!"
const name6 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, exercitationem!"
const name7 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, exercitationem!"

const description1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt itaque recusandae nulla doloremque quo ad omnis magnam, amet eaque perspiciatis deleniti fugit aut illo? Inventore consequatur nisi eveniet quos! Officiis nostrum possimus tempora temporibus aut animi vitae. Accusamus, nostrum natus?"
const description2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt itaque recusandae nulla doloremque quo ad omnis magnam, amet eaque perspiciatis deleniti fugit aut illo? Inventore consequatur nisi eveniet quos! Officiis nostrum possimus tempora temporibus aut animi vitae. Accusamus, nostrum natus?"
const description3 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt itaque recusandae nulla doloremque quo ad omnis magnam, amet eaque perspiciatis deleniti fugit aut illo? Inventore consequatur nisi eveniet quos! Officiis nostrum possimus tempora temporibus aut animi vitae. Accusamus, nostrum natus?"
const description4 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt itaque recusandae nulla doloremque quo ad omnis magnam, amet eaque perspiciatis deleniti fugit aut illo? Inventore consequatur nisi eveniet quos! Officiis nostrum possimus tempora temporibus aut animi vitae. Accusamus, nostrum natus?"
const description5 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt itaque recusandae nulla doloremque quo ad omnis magnam, amet eaque perspiciatis deleniti fugit aut illo? Inventore consequatur nisi eveniet quos! Officiis nostrum possimus tempora temporibus aut animi vitae. Accusamus, nostrum natus?"
const description6 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt itaque recusandae nulla doloremque quo ad omnis magnam, amet eaque perspiciatis deleniti fugit aut illo? Inventore consequatur nisi eveniet quos! Officiis nostrum possimus tempora temporibus aut animi vitae. Accusamus, nostrum natus?"
const description7 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt itaque recusandae nulla doloremque quo ad omnis magnam, amet eaque perspiciatis deleniti fugit aut illo? Inventore consequatur nisi eveniet quos! Officiis nostrum possimus tempora temporibus aut animi vitae. Accusamus, nostrum natus?"


const price1 = Math.floor(Math.random()*30) + '€'
const price2 = Math.floor(Math.random()*30) + '€'
const price3 = Math.floor(Math.random()*30) + '€'
const price4 = Math.floor(Math.random()*30) + '€'
const price5 = Math.floor(Math.random()*30) + '€'
const price6 = Math.floor(Math.random()*30) + '€'
const price7 = Math.floor(Math.random()*30) + '€'

const category1 = 'parrilla'
const category2 = 'ensaladas'
const category3 = 'empanadas'
const category4 = 'pescados'
const category5 = 'aguas-refrescos'
const category6 = 'vinos'
const category7 = 'empanadas'


saveProducts(name1, description1, price1, true, true, [], category1, true, console.log) 
saveProducts(name2, description2, price2, true, true, [], category2, true, console.log) 
saveProducts(name3, description3, price3, true, true, [], category3, true, console.log) 
saveProducts(name4, description4, price4, true, true, [], category4, true, console.log) 
saveProducts(name5, description5, price5, true, true, [], category5, true, console.log) 
saveProducts(name6, description6, price6, true, true, [], category6, true, console.log) 
saveProducts(name7, description7, price7, true, true, [], category7, true, console.log) 