modifyUser({city: "Huesca"},'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkxNTE5MzJkMjE3YzAwMTc2ZDhiNzQiLCJpYXQiOjE2MDMzOTMzNTAsImV4cCI6MTYwMzM5Njk1MH0.dtKgUdqyR22iltIfexiSZW0VHUy-FUHNqRluDiK1v4w',function(error){
    console.log('DEMO modifyUser()')
       
    if (!error) console.log('ok, perfect, the user has been updated! ,)')
    else console.error('ERROR! ' + error.message) 
})