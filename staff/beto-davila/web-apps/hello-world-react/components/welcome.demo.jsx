ReactDOM.render(
    <Welcome onDelete={function() {console.log('delete user confirmation')}} onUpdate={function() {console.log('update the user profile')}} />,
    document.getElementById('root')
)