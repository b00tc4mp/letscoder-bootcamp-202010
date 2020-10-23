retrieveUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkxNmE1MDJkMjE3YzAwMTc2ZDhiODgiLCJpYXQiOjE2MDMzODY0MjIsImV4cCI6MTYwMzM5MDAyMn0.a_NF89sZjxHN3-lrz6CwyywaFDalxG5xaflh2KFNz1c', function(error, user) {
    console.log('DEMO retrieveUser()');
    if (error) console.log(error);
    else console.log(user);
})