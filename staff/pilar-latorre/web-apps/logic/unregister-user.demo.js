unregisterUser('374637','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkxNTE5MzJkMjE3YzAwMTc2ZDhiNzQiLCJpYXQiOjE2MDMzOTUzNDksImV4cCI6MTYwMzM5ODk0OX0.KvLfftq6-EXyIQjr_zaZjoAjW3G3LEUHTfroftSUHiY',function(error){
    console.log('DEMO unregisterUser()')
       
    if (!error) console.log('ok, perfect, the user has been deleted! ,)')
    else console.error('ERROR! ' + error.message) 
})