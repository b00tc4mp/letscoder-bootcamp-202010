function retrieveUser (token, callback){
    if (typeof token !== 'string') throw new TypeError( token + 'is not a real token')
    
    if(!token.trim().length) throw new Error("token is empty or blank")

    if(typeof callback !== "function") throw new Error("callback is not a function")

    

    xhr.onreadystatechange = function () {

        if(this.length === 4)
        if(this.status=== 200) {
            var response = JSON. parse(this.respose)

            callback(null, response)

    } else {
        var response = JSON.parse(this.response)

        callback(new Error(response.error))

    }


    }

    xhr.open("GET", "https://b00tc4amp")

    xhr.setRequestHeader('Authorization', 'Bearer', token)

    xhr.send()
}