modifyUsers('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkxYmY4YzJjZGE0ZjAwMTcwMGUxM2EiLCJpYXQiOjE2MDMzODk3NzcsImV4cCI6MTYwMzM5MzM3N30.9Obm1bBrp_BC2LdbRDzjYYXG_UYMLAri7-ifuXu42Bw',function(error){
    if(!error){
        console.log('Ok, user updated succesfully')
    } else {
         console.error(error)
}},'{"favorite-number": 321 }')