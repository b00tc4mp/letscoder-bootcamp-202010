const { func } = require("prop-types");

ReactDOM.render(<RegisterConfirm onLogin = {function(){
    console.log('go to login')

}}/>, document.getElementById('root'))