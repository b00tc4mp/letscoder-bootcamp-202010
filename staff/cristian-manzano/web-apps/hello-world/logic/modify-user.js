function modifyUser(token, callback, update){

    if (typeof update !== 'string') throw new TypeError(update + ' is not an update');
    if (!update.trim().length) throw new Error('update is empty or blank');

    

    if (typeof callback !== 'function') throw new TypeError (callback + ' is not a callback');

    var xhr = new XMLHttpRequest;

    xhr.onreadystatechange = function() {
        if (this.readyState == 4){
        if (this.status === 204) {

            callback();
        } else {
            var response = JSON.parse(this.responseText);

                callback(new Error(response.error));
        }
    }
    }
    
    
    xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users');
    
    xhr.setRequestHeader('Authorization', 'Bearer ' + token);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(update);
    
}