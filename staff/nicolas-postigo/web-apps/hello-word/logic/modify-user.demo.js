modifyUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkxNTE5ZTJkMjE3YzAwMTc2ZDhiNzkiLCJpYXQiOjE2MDMzODU5MzQsImV4cCI6MTYwMzM4OTUzNH0.Ls_byjjGGQV_39tuLCSnUwAqHL9P_VraCvSjcxtKgp4', function(error){
    if(!error){
        console.log("Ok, user updated succesfully")
    } else {
    console.log(error)
}},'{"favorite":"peking"}')