ReactDOM.render(
    <Access onRegister={function() { console.log('go to register')}}
        onLogin={function() { console.log('go to login')}} />,
        document.getElementById('root')
)