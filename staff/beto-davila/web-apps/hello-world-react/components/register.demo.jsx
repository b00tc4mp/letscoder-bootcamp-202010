ReactDOM.render(
    <Register
        onRegister={function(fullname, email, password, respassword) {
            console.log('register: ', fullname, email, password, respassword);
        }}
    />,
    document.getElementById('root')
)