retrieveUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkxYmMwMjdjYTQ3OTAwMTcxYWM3M2QiLCJpYXQiOjE2MDMzODY0NTUsImV4cCI6MTYwMzM5MDA1NX0.ndI9Uu2n8bGVFBQZ-xeRYngmCHUTMpA3UB8qy64ApkM', function(error,user){
    console.log('Demo retrieveUser()')

    if(error) console.error(error)
    else console.log(user);
});