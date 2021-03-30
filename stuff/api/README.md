# API route path demos

## In a multi-diet user app

- create a diet for a user

POST /users/:userId/diets { ... }

- modify a diet from user

PATCH /users/:userId/diets/:dietId { ... }

- retrieve a diet from user

GET /users/:userId/diets/:dietId

## In a single diet user app

- create the diet for a user

POST /users/:userId/diets { ... }

- modify the diet from user

PATCH /users/:userId/diets { ... }

- retrieve the diet from user

GET /users/:userId/diets

## Foods

- search foods

GET /foods?q=<query>

## Pets

- add pet

POST /pets { ... }

- get pet

GET /pets/:petId

- modify pet

PATCH /pets/:petId { ... }

- remove pet

DELETE /pets/:petId

- search pets

GET /pets?q=<query>

- search pets by multiple aspects

GET /pets?q=<query>&city=<city>&bred=<bred>&color=<color>&distance=<distance>

app / logic => searchPets(query, city, bred, color, distance) {
    const API_URL = 'https://localhost:5000/'
    let url = `${API_URL}/pets?`

    if (query) url += `&query=${query}`

    if (city) url += `&city=${city}`

    ...

    if (distance) url += `&distance=${distance}`

    call(url, ...)
}

api / express => const { query: { q, city, bred, color, distance }} = req

searchPets(query, city, bred, color, distance) {
    const predicate = {}

    if (query) predicate.$search = { query }

    if (city) predicate.city = city

    if (bred) predicate.bred = bred

    // TODO city and distance

    return Pet.find(predicate)...
}
