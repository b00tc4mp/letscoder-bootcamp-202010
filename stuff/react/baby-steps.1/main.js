var title = React.createElement('h1', null, 'hola mundo')

var pepito = React.createElement('li', null, 'Pepito')
var papito= React.createElement('li', null, 'Papito')
var pescaito = React.createElement('li', null, 'Pescaito')

var people = React.createElement('ul', null, pepito, papito, pescaito)

ReactDOM.render([title, people], document.getElementById('root'))