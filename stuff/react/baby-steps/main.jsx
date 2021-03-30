const title = <h1>hola mundo</h1>

const names = ['Pepito', 'Papito', 'Pescaito']

const people = <ul>
    {/* {names.map(function (name) { return <li>{name}</li> })} */}
    {names.map(name => <li>{name}</li>)}
</ul>

ReactDOM.render([title, people], document.getElementById('root'))