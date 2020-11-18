modifyUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkxOTNkNDdjYTQ3OTAwMTcxYWM2ZGQiLCJpYXQiOjE2MDM0MzgyOTIsImV4cCI6MTYwMzQ0MTg5Mn0.4M1odapT5e_eZo1OWKsFhhKAWaxXoo133tolkvWenYY', function(error){
    console.log('DEMO modify-user')
    if (!error) {
        console.log('ok, update done')
    } 
    else {
        console.error(error)
    
    }},'{"Color": "blue"}')
