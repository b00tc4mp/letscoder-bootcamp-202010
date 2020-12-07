import './styles/Home.sass'
import { useState } from 'react'
import { retrieveUser, retrieveArticles, addUserArticles, retrieveSavedArticles, retrieveChosenArticle, retrieveRecipesImg, retrieveRecipes } from '../logic'
import logo from '../../src/logo.png'
import facebook from './icons/social/facebook.png'
import instagram from './icons/social/instagram.png'
import linkedin from './icons/social/linkedin.png'
import { DropDownMenu, DietDesign, UserDiet, Articles, UserProfile, ChosenArticle, Logout, RecipesImg, Welcome, Recipes } from './index'

export default function Home () {
    const [name, setName] = useState()
    const [view, setView] = useState('welcome')
    const [article, setArticle] = useState()
    const [message, setMessage] = useState()
    const [savedArticles, setSavedArticles] = useState()
    const [chosenArticle, setChosenArticle] = useState()
    // const [recipesImg, setRecipesImg] = useState()
    const [recipes, setRecipes] = useState()
     
    const { token } = sessionStorage

    const handleGoToWelcome = () => {
        setView('welcome')
    }

    const handleGoToRecipes = () => {
        try {
            retrieveUser(token, (error, user) => {
                if (error) return alert(error.message)

                const { fullname } = user
                setName(fullname)
                retrieveRecipes(token, (error, recipes) => {
                    if (error) return alert(error.message)
        
                    setRecipes(recipes)
                    setView("recipes")
                })
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleGoToDietDesign = () => {
        setView("diet-design")
    }

    const handleGoToUserDiet = () => {
        setView("user-diet")
    }

    const handleGoToBlog = () => {
        retrieveArticles(token, (error, articles) => {
            if (error) return alert(error.message)

            setArticle(articles)
            setView("articles")
        })
    }

    const handleGoToRandomArticle = () => {
        try {
            retrieveArticles(token, (error, articles) => {
                if (error) return alert(error.message)
    
                setArticle(articles)
                setView("articles")
            })     
        } catch (error) {
            return alert(error.message)
        }
    }

    const handleSaveArticle = articleId => {
        try {
            addUserArticles(token, articleId, error => {
                if (error) return alert(error.message)

                setMessage(true)
                setTimeout(() => {
                    setMessage(false)
                }, 4000)
            }) 
        } catch (error) {
            return alert(error.message)
        }
    }

    const handleReadArticle = articleId => {
        try {
            addUserArticles(token, articleId, error => {
                if (error) return alert(error.message)

                setMessage(true)
                setTimeout(() => {
                    setMessage(false)
                    }, 4000)
                }) 
        } catch (error) {
            return alert(error.message)
        }
    }

    const handleGoToProfile = () => {
        try {
            retrieveSavedArticles(token, (error, articles) => {
                if (error) return alert(error.message)

                setSavedArticles(articles)
                setView("profile")
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleGoToChosenArticle = articleId => {
        retrieveChosenArticle(token, articleId, (error, chosenArticle) => {
            if (error) return alert (error.message)

            setChosenArticle(chosenArticle)
            setView('chosen-article')
        })
    }

    const handleGoToLogOut = () => {
        setView('logout')
    }

    const handleGoToLanding = () => {
        delete sessionStorage.token
        window.location.reload(false)
    }
 

    return <><div className="home">
    <img className="home__logo" alt="logo" src={logo} height="100" width="100"></img>
    <h1 className="home__title">MartachisFIT</h1>
    <p className="home__user">¡Bienvenid@, <span className="home__user--name">{name}</span>!</p>
    <nav className="home__social">
        <a href="https://es-es.facebook.com/m.albimuro?fref=nf"><img className="home__social-logo" alt="facebook" src={facebook} width="13"></img></a><a href="https://www.instagram.com/martachis.fit/"><img alt="instagram" width="13" className="home__social-logo" src={instagram}></img></a><a href="https://www.linkedin.com/in/alberto-davila-gomez-250460b0"><img className="home__social-logo" alt="linkedin" width="13" src={linkedin}></img></a>
    </nav>
    <DropDownMenu onGoToDietDesign={handleGoToDietDesign} onGoToWelcome={handleGoToWelcome} onGoToRecipes={handleGoToRecipes} onGoToUserDiet={handleGoToUserDiet} onGoToBlog={handleGoToBlog} onGoToProfile={handleGoToProfile}/>
    {view === 'welcome' && <Welcome />}
    {view === 'diet-design' && <DietDesign />}
    {view === 'recipes' && recipes && <Recipes source={recipes}/>}
    {/* {view === 'recipes-img' && recipesImg && <RecipesImg recipesImg={recipesImg} />} */}
    {view === 'user-diet' && <UserDiet onGoToUserDiet={handleGoToUserDiet}/>}
    {view === 'articles' && article && <Articles source={article} message={message} onGoToRandomArticle={handleGoToRandomArticle} onSaveArticle={handleSaveArticle}/>}
    {view === 'profile' && <UserProfile onLogout={handleGoToLogOut} name={name} savedArticles={savedArticles} onGoToChosenArticle={handleGoToChosenArticle}/>}
    {view === 'chosen-article' && <ChosenArticle source={chosenArticle} onReadArticle={handleReadArticle}/>}
    {view === 'logout' && <Logout onRefresh={handleGoToLanding} name={name}/>}
    </div>
    </>
}