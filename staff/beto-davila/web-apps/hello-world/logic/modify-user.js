function  modifyUser(token, update, callback) {

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback');
    if (typeof token !== 'string') throw new TypeError(token + ' is not a token');
    if (!token.trim().length) throw new Error('token is empty or blank');


   var xhr = new XMLHttpRequest;

   xhr.onreadystatechange = function() {
     if (this.readyState == 4) {
       if (status === 204) {
        var response = JSON.parse(this.responseText);
         callback(); // return nothing if successful
       } else {
         var response = JSON.parse(this.responseText);
         callback(new Error(response.error)); // returning an error otherwise
       }
     }
   }

   xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users');
   xhr.setRequestHeader('Authorization', 'Bearer ' + token);
   xhr.setRequestHeader('Content-type', 'application/json');
   xhr.send(update);
}