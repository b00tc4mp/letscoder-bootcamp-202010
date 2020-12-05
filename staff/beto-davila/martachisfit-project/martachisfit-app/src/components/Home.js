import './styles/Home.sass'
import { useState, useEffect } from 'react'
import { retrieveUser, retrieveArticles, addUserArticles, retrieveSavedArticles, retrieveChosenArticle } from '../logic'
import logo from '../../src/logo.png'
import { DropDownMenu, DietDesign, UserDiet, Articles, UserProfile, ChosenArticle, Logout } from './index'

export default function Home () {
    const [name, setName] = useState()
    const [view, setView] = useState()
    const [article, setArticle] = useState()
    const [message, setMessage] = useState()
    const [savedArticles, setSavedArticles] = useState()
    const [chosenArticle, setChosenArticle] = useState()
     
    const { token } = sessionStorage

    useEffect(() => {

        try {
            retrieveUser(token, (error, user) => {
                if (error) return alert(error.message)

                const { fullname } = user
                setName(fullname)
                retrieveArticles(token, (error, articles) => {
                    if (error) return alert(error.message)
        
                    setArticle(articles)
                    setView("articles")
                })
            })
        } catch (error) {
            alert(error.message)
        }
    }, [])

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
    <DropDownMenu onGoToDietDesign={handleGoToDietDesign} onGoToUserDiet={handleGoToUserDiet} onGoToBlog={handleGoToBlog} onGoToProfile={handleGoToProfile}/>
    {view === 'diet-design' && <DietDesign />}
    {view === 'user-diet' && <UserDiet onGoToUserDiet={handleGoToUserDiet}/>}
    {(view === 'articles' && article) && <Articles source={article} message={message} onGoToRandomArticle={handleGoToRandomArticle} onSaveArticle={handleSaveArticle}/>}
    {view === 'profile' && <UserProfile onLogout={handleGoToLogOut} name={name} savedArticles={savedArticles} onGoToChosenArticle={handleGoToChosenArticle}/>}
    {view === 'chosen-article' && <ChosenArticle source={chosenArticle} onReadArticle={handleReadArticle}/>}
    {view === 'logout' && <Logout onRefresh={handleGoToLanding} name={name}/>}
    </div>
    </>
}