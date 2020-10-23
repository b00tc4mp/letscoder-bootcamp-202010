function authenticateUser(email, password, callback) {

    if(typeof email !== 'string') throw new TypeError(email + ' is not an email');
    if(!email.trim().length) throw new Error('email is empty or blank');
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) throw new Error('invalid e-mail');
    if(typeof password !== 'string') throw new TypeError(password + ' is not a password');
    if (!password.trim().length) throw new Error('password is empty or blank');
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback');

    /*var user = users.find(function(user) {return user.email === email && user.password === password});
    if (!user) throw new Error ('wrong credentials');
    */

   var xhr = new XMLHttpRequest;

   xhr.onreadystatechange = function() {
     if (this.readyState == 4) {
       if (status === 200) {
        var response = JSON.parse(this.responseText);
         callback(undefined, response.token); // return a token if successful authentication
       } else {
         var response = JSON.parse(this.responseText);
         callback(new Error(response.error)); // returning an error otherwise
       }
     }
   }

   xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth');
   xhr.setRequestHeader('Content-type', 'application/json');
   xhr.send('{"username:" "' + email + '", "password": "' + password + '"}');
}