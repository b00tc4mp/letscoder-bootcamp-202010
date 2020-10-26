ReactDOM.render(
    <Register
        onRegister={function (fullname, email, password, resspasword) {
            console.log(fullname, email, password, resspasword)
        }}
    />,
    document.getElementById('root')
)