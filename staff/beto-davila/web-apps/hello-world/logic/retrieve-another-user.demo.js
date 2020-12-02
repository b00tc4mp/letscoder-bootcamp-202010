retrieveAnotherUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkyNTNjYTA3NjZlNDAwMTdiODUwMDgiLCJpYXQiOjE2MDM0MjUyNTksImV4cCI6MTYwMzQyODg1OX0.qGMdlD8nkyvS7zUtwC5BsalxTuhAfpCfylQ2mJbZtCI', function(error, user) {
    console.log('Demo retrieveAnotherUser()');
    if(!error) console.log(user);
    else console.error(error.message);
});
    
    