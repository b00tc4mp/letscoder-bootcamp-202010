retrieveAllUsers('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkyNTNjYTA3NjZlNDAwMTdiODUwMDgiLCJpYXQiOjE2MDM0MjUyNTksImV4cCI6MTYwMzQyODg1OX0.qGMdlD8nkyvS7zUtwC5BsalxTuhAfpCfylQ2mJbZtCI', function(error, users) {
    console.log('Demo retrieveAllUsers()');
    if(!error) console.log(users);
    else console.error(error.message);
});
