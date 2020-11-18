retrieveAllUsers('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkxNTFlMTJkMjE3YzAwMTc2ZDhiN2UiLCJpYXQiOjE2MDM0NzU5NjAsImV4cCI6MTYwMzQ3OTU2MH0.PsFcfpUFBc3jSSEML4tIliHe9PHFoM_EDXPxH0XPaXQ',function(error,users){
    if(!error){
        for(var i = 0; i<users.length ; i++)
            console.log(users[i])
    }else{
        console.error(error.message)
    }
        
    
})