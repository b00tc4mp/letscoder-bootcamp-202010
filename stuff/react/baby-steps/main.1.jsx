var title = <h1>hola mundo</h1>

var pepito = <li>Pepito</li>
var papito = <li>Papito</li>
var pescaito = <li>Pescaito</li>
    
var people = <ul>
      {pepito}
      {papito}
      {pescaito}
</ul>

ReactDOM.render([title, people], document.getElementById('root'))