function modifyUser(data,token,callback) {
    if (typeof data !== "string") throw new TypeError("data is not a string")

    if(typeof token !== "string") throw new TypeError("token is not a string")

    //callbak
 var xhr = new XMLHttpRequest

 xhr.onreadystatechange = function() {
     if(this.readyState ==4)
        if(this.status ===204)
        callback()

    else {
        var response = JSON.parse(this.resposeText)
        
        callback(new Error(response.error))
    }

} 
   
    xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')
    
    xhr.set('authorisation', 'bearer' + token)

    xhr.setRequestHeader( 'Content-type', 'application/json')

    xhr.send(data)
}


