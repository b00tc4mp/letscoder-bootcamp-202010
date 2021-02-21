function retrieveAnotherUser(idUser,token, callback){
    if (typeof token !== 'string') throw new TypeError( token + 'is not a real token')
    
    if(!token.trim().length) throw new Error("token is empty or blank")

    if(typeof callback !== "function") throw new Error("callback is not a callbak")

    
    
    var xhr = new XMLHttpRequest

    xhr.onreadystatechange = function () {

        if(this.readyState == 4)
        if(this.status === 200) {
            var response = JSON.parse(this.responseText)

            callback(null, response)

    } else {
        var response = JSON.parse(this.responseText)

        callback(new Error(response.error))

    }


    }

    xhr.open("GET",'https://b00tc4mp.herokuapp.com/api/v2/users/' + idUser)

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.send()
}