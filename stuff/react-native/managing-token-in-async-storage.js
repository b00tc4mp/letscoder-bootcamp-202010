// App from Login

// inside handleLogin
authenticateUser(email, password, (error, token) => {
    if (error) return setError(error.message) // show error in Feedback panel

    AsyncStorage.setItem('token', token)
        .then(() => setView('home'))
})

// Home

// inside useEffect
AsyncStorage.getItem('token')
    .then(token => {
        retrieveUser(token, (error, user) => {
            if (error) return setError(error.message) // show error in Feedback panel

            const { fullname } = user

            setFullname(fullname)
        })
    })