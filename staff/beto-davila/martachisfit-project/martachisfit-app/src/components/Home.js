import './styles/Home.sass'

import { useState, useEffect } from 'react'

import {
    retrieveUser,
    retrieveArticles,
    addUserArticles,
    retrieveSavedArticles,
    retrieveChosenArticle,
    retrieveRecipes,
    retrieveRecipe,
    addUserRecipes,
    retrieveSavedRecipes,
    retrieveChosenDiet,
    retrieveWorkout,
    retrieveMuscularGroup,
    toggleWorkoutsUser,
    retrieveSavedWorkouts,
    savePictureUser,
    saveWeightUser,
    deleteUser
} from '../logic'

import logo from '../../src/logo.png'
import facebook from './icons/social/facebook.png'
import instagram from './icons/social/instagram.png'
// import linkedin from './icons/social/linkedin.png'

import {
    DropDownMenu,
    DietDesign,
    UserDiet,
    Articles,
    UserProfile,
    Logout,
    Welcome,
    ChosenArticle,
    Recipes,
    Recipe,
    Diets,
    Workouts,
    Workout,
    Movements,
    Feedback
} from './index'

export default function Home() {
    const [name, setName] = useState()
    const [view, setView] = useState('welcome')
    const [article, setArticle] = useState()
    const [message, setMessage] = useState()
    const [savedArticles, setSavedArticles] = useState()
    const [chosenArticle, setChosenArticle] = useState()
    const [chosenDiet, setChosenDiet] = useState()
    const [recipes, setRecipes] = useState()
    const [recipe, setRecipe] = useState()
    const [savedRecipes, setSavedRecipes] = useState()
    const [calories, setCalories] = useState()
    const [likedRecipe, setLikedRecipe] = useState()
    const [workout, setWorkout] = useState()
    const [error, setError] = useState(null)
    const [movements, setMovements] = useState()
    const [myWorkouts, setSavedWorkouts] = useState()
    const [likedWorkout, setLikedWorkout] = useState()
    const [user, setUser] = useState()
    const [avatar, setAvatar] = useState()
    const [messageWeight, setMessageWeight] = useState()
    // const [refreshWeight, setRefreshWeight] = useState()

    const { token } = sessionStorage

    useEffect(() => {
        try {
            retrieveUser(token, (error, user) => {
                if (error) return feedbackError('No se pudo recuperar el usuario. Error en el servidor :(')

                setUser(user)
                const { fullname } = user
                setName(fullname)
            })
        } catch (error) {
            alert(error.message)
        }

    }, [])

    function feedbackError(error) {
        setError(error)
        setTimeout(() => {
            setError(null)
        }, 5000)
    }

    const handleGoToWelcome = () => {
        setView('welcome')
    }

    const handleGoToRecipes = () => {
        try {
            retrieveUser(token, (error, user) => {
                if (error) return feedbackError('No se pudo recuperar el usuario. Error de servidor.')

                const { fullname } = user
                setName(fullname)
                retrieveRecipes(token, (error, recipes) => {
                    if (error) return feedbackError('Hubo un error recuperando las recetas :(')

                    setRecipes(recipes)
                    setView("recipes")
                })
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleGoToWorkouts = () => {
        setView("workouts")
    }

    const handleGoToDietDesign = () => {
        setView("diet-design")
    }

    const handleGoToUserDiet = () => {
        try {
            retrieveUser(token, (error, user) => {
                if (error) return feedbackError('No se pudo recuperar el usuario. Error de servidor :(')

                const { calories } = user
                setCalories(calories)
                setView("diets")
            })

        } catch (error) {
            alert(error.message)

        }
    }

    const handleGoToBlog = () => {
        try {
            retrieveArticles(token, (error, articles) => {
                if (error) return feedbackError("Hubo un error recuperando los artículos del blog :(")

                setArticle(articles)
                setView("articles")
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleGoToRandomArticle = () => {
        try {
            retrieveArticles(token, (error, articles) => {
                if (error) return feedbackError("Hubo un error recuperando los artículos del blog :(")

                setArticle(articles)
                setView("articles")
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleSaveArticle = articleId => {
        try {
            addUserArticles(token, articleId, error => {
                if (error) return feedbackError("No se pudo guardar el artículo seleccionado")

                setMessage(true)
                setTimeout(() => {
                    setMessage(false)
                }, 2000)
            })
        } catch (error) {
            return alert(error.message)
        }
    }

    const handleSaveRecipe = recipeId => {
        try {
            addUserRecipes(token, recipeId, error => {
                if (error) return feedbackError("Hubo un problema intentando guardar la receta :(")

                retrieveUser(token, (error, user) => {
                    if (error) return feedbackError('No se pudo recuperar el usuario. Error de servidor.')

                    const { savedRecipes } = user
                    retrieveRecipe(recipeId, (error, recipe) => {
                        if (error) return feedbackError("Hubo un problema intentando recuperar la receta :(")

                        const { id: recipeId } = recipe
                        savedRecipes.includes(recipeId) ? setLikedRecipe(true) : setLikedRecipe(false)
                        setRecipe(recipe)
                        setView('recipe')
                    })
                })
            })
        } catch (error) {
            return alert(error.message)
        }
    }

    const handleSaveWorkout = level => {
        try {
            toggleWorkoutsUser(token, level, error => {
                if (error) return feedbackError("Hubo un problema intentando guardar el entrenamiento :(")

                retrieveUser(token, (error, user) => {
                    if (error) return feedbackError('No se pudo recuperar el usuario. Error de servidor.')

                    const { myWorkouts } = user
                    retrieveWorkout(level, (error, workout) => {
                        if (error) return feedbackError("Hubo un problema intentando recuperar la rutina de entrenamiento :(")

                        const { id: workoutId } = workout
                        myWorkouts.includes(workoutId) ? setLikedWorkout(true) : setLikedWorkout(false)
                        setWorkout(workout)
                        setView('workout')
                    })
                })
            })
        } catch (error) {
            return alert(error.message)
        }
    }

    const handleReadArticle = articleId => {
        try {
            addUserArticles(token, articleId, error => {
                if (error) return feedbackError('Hubo un problema. Inténtalo de nuevo más tarde.')

                setMessage(true)
                setTimeout(() => {
                    setMessage(false)
                }, 2000)
            })
        } catch (error) {
            return alert(error.message)
        }
    }

    const handleGoToProfile = () => {
        try {
            retrieveSavedArticles(token, (error, articles) => {
                if (error) return feedbackError('No se pudo acceder. Error de servidor.')

                setSavedArticles(articles)
                retrieveSavedRecipes(token, (error, savedRecipes) => {
                    if (error) return feedbackError('No se pudo acceder. Error de servidor.')

                    setSavedRecipes(savedRecipes)
                    retrieveSavedWorkouts(token, (error, savedWorkouts) => {
                        if (error) return feedbackError('No se pudo acceder. Error de servidor.')

                        setSavedWorkouts(savedWorkouts)
                        setView("profile")
                    })
                })
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleGoToChosenArticle = articleId => {
        try {
            retrieveChosenArticle(token, articleId, (error, chosenArticle) => {
                if (error) return feedbackError('Hubo un problema tratando de recuperar el artículo :(')

                setChosenArticle(chosenArticle)
                setView('chosen-article')
            })

        } catch (error) {
            alert(error.message)
        }
    }

    const handleGoToRecipe = recipeId => {
        try {
            retrieveUser(token, (error, user) => {
                if (error) return feedbackError('No se pudo acceder. Error de servidor.')

                const { savedRecipes } = user
                retrieveRecipe(recipeId, (error, recipe) => {
                    if (error) return feedbackError('Hubo un problema tratando de recuperar la receta')

                    const { id: recipeId } = recipe
                    savedRecipes.includes(recipeId) ? setLikedRecipe(true) : setLikedRecipe(false)
                    setRecipe(recipe)
                    setView('recipe')
                })
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleRetrieveWorkout = level => {
        try {
            retrieveUser(token, (error, user) => {
                if (error) return feedbackError('Error de servidor :(')

                const { myWorkouts } = user
                retrieveWorkout(level, (error, workout) => {
                    if (error) return feedbackError('Hubo un problema tratando de recuperar la rutina')

                    const { id: workoutId } = workout
                    myWorkouts.includes(workoutId) ? setLikedWorkout(true) : setLikedWorkout(false)
                    setWorkout(workout)
                    setView('workout')
                })
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleRetrieveChosenDiet = dietType => {
        try {
            retrieveChosenDiet(token, dietType, (error, chosenDiet) => {
                if (error) feedbackError('Hubo un error tratando de recuperar la dieta seleccionada')

                setChosenDiet(chosenDiet)
                setView('chosen-diet')
            })

        } catch (error) {
            alert(error.message)
        }
    }


    const handleGoToMovements = () => {
        setView('movements')
    }

    const handleRetrieveGroup = group => {
        const { value } = group
        try {
            retrieveMuscularGroup(value, (error, movements) => {
                if (error) feedbackError('No se ha podido recuperar el grupo muscular seleccionado')

                setMovements(movements)
            })

        } catch (error) {
            alert(error.message)
        }
    }

    const handleSavePicture = image => {
        savePictureUser(token, image, error => {
            if (error) return feedbackError('No fue posible subir la imagen')

            setMessage(true)
            setTimeout(() => {
                setMessage(false)
            }, 3000);
            retrieveUser(token, (error, user) => {
                if (error) return alert(error.message)

                setAvatar(true)
            })
        })
    }

    const handleSaveWeight = weight => {
        saveWeightUser(token, weight, (error) => {
            if (error) feedbackError('No se pudo guardar su peso. Error de servidor')

            setMessageWeight(true)
            setTimeout(() => {
                setMessageWeight(false)
            }, 2000)
        })
    }

    const handleModifiedWeightUser = () => {
        retrieveUser(token, (error, user) => {
            if (error) return feedbackError('Error de servidor')

            setUser(user)
        })
    }

    const handleDeleteUser = () => {
        try {
            deleteUser(token, error => {
                if (error) return feedbackError('No se pudo borrar el usuario. Error en el servidor.')

                delete sessionStorage.token
                window.location.reload(false)
            })

        } catch (error) {
            return feedbackError(error.message)
        }
    }

    const handleGoToLogOut = () => {
        setView('logout')
    }

    const handleGoToLanding = () => {
        delete sessionStorage.token
        window.location.reload(false)
    }


    return <>
        <div className="home__logo-title-dropdown">
            <div className="home">
                <div className="home__header">
                    <img className="home__logo" alt="logo" src={logo} height="100" width="100" onClick={handleGoToWelcome}></img>
                    <div className="home__title-user">
                        <h1 className="home__title">MartachisFIT</h1>
                    </div>
                    <nav className="home__social">
                        <a href="https://es-es.facebook.com/m.albimuro?fref=nf"><img className="home__social-logo" alt="facebook" src={facebook} width="13"></img></a><a href="https://www.instagram.com/martachis.fit/"><img alt="instagram" width="13" className="home__social-logo" src={instagram}></img></a>
                        {/* <a href="https://www.linkedin.com/in/alberto-davila-gomez-250460b0"><img className="home__social-logo" alt="linkedin" width="13" src={linkedin}></img></a> */}
                    </nav>
                </div>
                {error && <Feedback error={error} />}
                <DropDownMenu
                    onGoToDietDesign={handleGoToDietDesign}
                    onGoToWelcome={handleGoToWelcome}
                    onGoToRecipes={handleGoToRecipes}
                    onGoToUserDiet={handleGoToUserDiet}
                    onGoToBlog={handleGoToBlog}
                    onGoToProfile={handleGoToProfile}
                    onGoToWorkouts={handleGoToWorkouts}
                />
            </div>
            {view === 'welcome' &&
                <Welcome onGoToRecipes={handleGoToRecipes}
                    onGoToArticles={handleGoToBlog}
                    onGoToDiets={handleGoToUserDiet}
                    onGoToDietDesign={handleGoToDietDesign}
                    onGoToWorkouts={handleGoToWorkouts}
                />}
            {view === 'diet-design' && <DietDesign />}
            {view === 'workouts' && <Workouts error={error} onChosenLevel={handleRetrieveWorkout} onGoToMovements={handleGoToMovements} />}
            {view === 'movements' && <Movements onGoToWorkouts={handleGoToWorkouts} onMuscularGroup={handleRetrieveGroup} movements={movements} error={error} />}
            {view === 'workout' && <Workout like={likedWorkout} error={error} onSaveWorkout={handleSaveWorkout} onGoToWorkouts={handleGoToWorkouts} source={workout} />}
            {view === 'recipes' && recipes && <Recipes source={recipes} onGoToRecipe={handleGoToRecipe} />}
            {view === 'recipe' && recipe && <Recipe onGoToRecipes={handleGoToRecipes} error={error} onSaveRecipe={handleSaveRecipe} source={recipe} message={message} like={likedRecipe} />}
            {view === 'chosen-diet' && <UserDiet diet={chosenDiet} onGoToDiets={handleGoToUserDiet} />}
            {view === 'diets' && <Diets onChosenDiet={handleRetrieveChosenDiet} onGoToDiets={handleGoToUserDiet} goal={calories} />}
            {view === 'articles' && article &&
                <Articles source={article}
                    error={error}
                    message={message}
                    onGoToRandomArticle={handleGoToRandomArticle}
                    onGoToProfile={handleGoToProfile}
                    onSaveArticle={handleSaveArticle}
                    onRead={handleReadArticle}
                />}
            {view === 'profile' &&
                <UserProfile onGoToRecipe={handleGoToRecipe}
                    onLogout={handleGoToLogOut}
                    savedRecipes={savedRecipes}
                    user={user}
                    savedArticles={savedArticles}
                    onGoToChosenArticle={handleGoToChosenArticle}
                    onGoToMyWorkout={handleRetrieveWorkout}
                    myWorkouts={myWorkouts}
                    onSavePicture={handleSavePicture}
                    error={error}
                    feedbackImage={message}
                    avatar={avatar}
                    feedbackWeight={messageWeight}
                    onSaveWeight={handleSaveWeight}
                    onSaved={handleModifiedWeightUser}
                    onDelete={handleDeleteUser}
                // refreshWeight={refreshWeight}
                />}
            {view === 'chosen-article' && <ChosenArticle source={chosenArticle} error={error} message={message} onReadArticle={handleReadArticle} />}
            {view === 'logout' && <Logout onRefresh={handleGoToLanding} name={name} />}
        </div>
    </>
}