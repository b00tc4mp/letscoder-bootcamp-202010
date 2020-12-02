const express = require("express");

const app = express();

const port = 4000;

app.get("/api/test", (req, res) => {
  res.send("Urban Fitness Backend");
});

app.listen(port, () => {
  console.log("server running on " + port);
});
