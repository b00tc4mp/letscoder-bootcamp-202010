retrieveAllUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1Zjk0NDBmYWI1ZmFlNTAwMTdmNTM2ODYiLCJpYXQiOjE2MDM1NTE0OTQsImV4cCI6MTYwMzU1NTA5NH0.OlcVvWNReDHRwrgCpYHCXD2SDIDzc__T_cfHPHy3wKQ', function(error, user){
    console.log('DEMO retrieveAllUser()')

    if(error) console.error(error)
    else console.log(user)
})