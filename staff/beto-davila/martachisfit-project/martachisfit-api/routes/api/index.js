const { Router } = require('express')
const jsonBodyParser = require('../../middlewares/json-body-parser')
const handleAddUserRecipes = require('./handlers/handle-add-user-recipes')

const {
    handleRegisterUser,
    handleAuthenticateUser,
    handleRetrieveUser,
    // handleAddFood,
    handleFindFood,
    handleToggleFoodUserDiet,
    handleRetrieveSavedFood,
    handleAddFoodUserDiet,
    handleRetrieveDiet,
    handleRetrieveArticles,
    handleAddUserArticles,
    handleRetrieveSavedArticles,
    handleRetrieveChosenArticle,
    handleRetrieveRecipe,
    handleRetrieveRecipes,
    handleRetrieveSavedRecipes
} = require('./handlers/index')

const router = new Router()

const withErrorHandling = require('./helpers/handle-error')

// register user
router.post('/api/users', jsonBodyParser, withErrorHandling(handleRegisterUser))

// retrieve user
router.get('/api/users', withErrorHandling(handleRetrieveUser))

// authenticate user
router.post('/api/users/auth', jsonBodyParser, withErrorHandling(handleAuthenticateUser))

// add food to db
// router.post('/api/foods', jsonBodyParser, withErrorHandling(handleAddFood))

// retrieve saved food
router.get('/api/users/foods', withErrorHandling(handleRetrieveSavedFood))

// find food
router.post('/api/foods', jsonBodyParser, withErrorHandling(handleFindFood))

// toggle food
router.patch('/api/users/foods/:foodId', jsonBodyParser, withErrorHandling(handleToggleFoodUserDiet))

// add food to user diet
router.patch('/api/users/foods', jsonBodyParser, withErrorHandling(handleAddFoodUserDiet))

// add article to read later
router.patch('/api/users/articles/:articleId', jsonBodyParser, withErrorHandling(handleAddUserArticles))

// retrieve user diet
router.get('/api/users/diets', withErrorHandling(handleRetrieveDiet))

// retrieve one recipe
router.get('/api/recipes/:recipeId', withErrorHandling(handleRetrieveRecipe))

// retrieve recipes
router.get('/api/recipes', withErrorHandling(handleRetrieveRecipes))

// retrieve user articles
router.get('/api/users/articles', withErrorHandling(handleRetrieveSavedArticles))

// retrieve user recipes
router.get('/api/users/recipes', withErrorHandling(handleRetrieveSavedRecipes))

// add recipe to personal collection
router.patch('/api/users/recipes/:recipeId', jsonBodyParser, withErrorHandling(handleAddUserRecipes))

// retrieve user chosen article
router.get('/api/users/articles/:articleId', withErrorHandling(handleRetrieveChosenArticle))

// retrieve articles
router.get('/api/articles', withErrorHandling(handleRetrieveArticles))

module.exports = router