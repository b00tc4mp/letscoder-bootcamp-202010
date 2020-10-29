ReactDOM.render(
    <Delete 
        onDelete= {function () {
            console.log('Your account has been deleted')
        }}/>,
    document.getElementById('root')
)