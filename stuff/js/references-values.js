var pepito = {}

pepito.name = 'Pepito'
pepito.surname = 'Grillo'
"Grillo"
pepito
{name: "Pepito", surname: "Grillo"}
var fulanito = pepito
undefined
fulanito
{name: "Pepito", surname: "Grillo"}
fulanito.name = 'Fulanito'
"Fulanito"
fulanito
{name: "Fulanito", surname: "Grillo"}
pepito
{name: "Fulanito", surname: "Grillo"}name: "Fulanito"surname: "Grillo"__proto__: Object
var menganito = fulanito.surname
undefined
menganito
"Grillo"
fulanito.surname = 'Nito'
"Nito"
menganito
"Grillo"
pepito
{name: "Fulanito", surname: "Nito"}