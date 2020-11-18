modifyUser('{"city": "NewYork"}','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkxOWUxYTdjYTQ3OTAwMTcxYWM2ZTAiLCJpYXQiOjE2MDM2MjU0NDksImV4cCI6MTYwMzYyOTA0OX0.ez_86v7pOIfoHZzLKGmw9xYawrqP5XsntMlBpbW_ueo',function(error){
    console.log('DEMO modifyUser()')
       
    if (!error) console.log('ok, perfect, the user has been updated! ,)')
    else console.error('ERROR! ' + error.message) 
})