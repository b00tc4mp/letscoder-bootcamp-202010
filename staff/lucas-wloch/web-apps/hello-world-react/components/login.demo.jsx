ReactDOM.render(
    <Login
        onLogin={function (email, password) {
            console.log(email, password)
        }}
    />,
    document.getElementById('root')
)