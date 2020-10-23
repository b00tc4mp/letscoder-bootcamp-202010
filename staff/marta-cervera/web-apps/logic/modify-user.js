function modifyUser(token,callback,data) {
    if (typeof data !== "string") throw new TypeError("data is not a string")

    if(typeof token !== "string") throw new TypeError("token is not a string")


 var xhr = new XMLHttpRequest

 xhr.onreadystatechange = function() {
     if(this.readyState ==4)
        if(this.status ===202)//204
        callback()

    else {
        var response = JSON.parse(this.resposeText)
        
        callback(new Error(response.error))
    }

} 
   
    xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')
    
    xhr.send('authorisation', 'bearer')

    xhr.setRequestHeader( 'Content-type', 'application/json')

    xhr.send(data)
}


