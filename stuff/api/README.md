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