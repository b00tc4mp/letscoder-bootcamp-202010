ReactDOM.render(
    <Register
        onRegister={function (fullname,email,password,repassword) {
            console.log(fullname,email,password,repassword)
        }}
    />,
    document.getElementById('root')
)