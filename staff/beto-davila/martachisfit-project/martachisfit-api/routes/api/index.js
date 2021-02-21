const { Router } = require('express')
const jsonBodyParser = require('../../middlewares/json-body-parser')
const jwtParser = require('../../middlewares/jwt-parser')

const {
    handleRegisterUser,
    handleAuthenticateUser,
    handleRetrieveUser,
    // handleAddFood, (admin version)
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
    handleRetrieveSavedRecipes,
    handleRetrieveChosenDiet,
    handleRetrieveWorkout,
    handleRetrieveMuscularGroup,
    handleAddUserRecipes,
    handleToggleWorkoutsUser,
    handleSavePictureUser,
    handleRetrievePictureUser,
    handleRetrieveSavedWorkouts,
    handleSaveWeightUser,
    handleDeleteUser
} = require('./handlers/index')

const router = new Router()

const withErrorHandling = require('./helpers/handle-error')

// register user
router.post('/api/users', jsonBodyParser, withErrorHandling(handleRegisterUser))

// retrieve user
router.get('/api/users', jwtParser, withErrorHandling(handleRetrieveUser))

// authenticate user
router.post('/api/users/auth', jsonBodyParser, withErrorHandling(handleAuthenticateUser))

// add food to db (not for users)
// router.post('/api/foods', jsonBodyParser, withErrorHandling(handleAddFood))

// retrieve saved food
router.get('/api/users/foods', withErrorHandling(handleRetrieveSavedFood))

// find food
router.get('/api/foods', withErrorHandling(handleFindFood))

// toggle food
router.patch('/api/users/foods/:foodId', jsonBodyParser, withErrorHandling(handleToggleFoodUserDiet))

// toggle workouts
router.patch('/api/users/workouts/:level', jsonBodyParser, withErrorHandling(handleToggleWorkoutsUser))

// add food to user diet
router.patch('/api/users/foods', jsonBodyParser, withErrorHandling(handleAddFoodUserDiet))

// save user's current weight 
router.patch('/api/users', jsonBodyParser, withErrorHandling(handleSaveWeightUser))

// add article to read later
router.patch('/api/users/articles/:articleId', jsonBodyParser, withErrorHandling(handleAddUserArticles))

// retrieve user diet
router.get('/api/users/diets', withErrorHandling(handleRetrieveDiet))

// retrieve user workouts
router.get('/api/users/workouts', withErrorHandling(handleRetrieveSavedWorkouts))

// retrieve workout by level
router.get('/api/users/:level/workouts', withErrorHandling(handleRetrieveWorkout))

// retrieve muscular movement by group
router.get('/api/movements/:group', withErrorHandling(handleRetrieveMuscularGroup))

// retrieve chosen diet
router.get('/api/users/diets/:dietType', withErrorHandling(handleRetrieveChosenDiet))

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

// user uploads
router.post('/api/users/uploads', withErrorHandling(handleSavePictureUser))

// retrieve user picture upload
router.get('/api/users/:userId/uploads', withErrorHandling(handleRetrievePictureUser))

// user profile deletetion
router.delete('/api/users/delete', withErrorHandling(handleDeleteUser))

module.exports = router