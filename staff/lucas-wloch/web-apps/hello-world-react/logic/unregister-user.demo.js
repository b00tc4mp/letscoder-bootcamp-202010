unregisterUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkxYmMwMjdjYTQ3OTAwMTcxYWM3M2QiLCJpYXQiOjE2MDMzODY1NDQsImV4cCI6MTYwMzM5MDE0NH0.llVcdc2mnzgzMjTe1IIMO_f5UJJ6Y50pAydLy-1UL8U','123',function(error) {
    if(!error){
        console.log('Ok, user deleted succesfully')
    } else {
         console.error(error)
}});