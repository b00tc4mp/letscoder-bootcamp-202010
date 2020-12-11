retrieveAnotherUser(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1Zjk1MjFjMzk1ZGUxODAwMTcxYmIxZjAiLCJpYXQiOjE2MDM2MTQzOTAsImV4cCI6MTYwMzYxNzk5MH0.uAK-0Hp3nXxiXjILptWCzLpokKq7Cq_19y3GcPfuptM",
  "5f9151872d217c00176d8b71",
  function (error, user) {
    console.log("DEMO retriveUser()");

    if (error) console.error(error);
    else console.dir(user);
  }
);
