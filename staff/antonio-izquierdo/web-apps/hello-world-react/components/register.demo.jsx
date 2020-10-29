ReactDOM.render(<Register onRegister={function(fullname, email, password, repassword) {
    console.log('register', fullname, email, password, repassword)
}} />, document.getElementById('root')) 