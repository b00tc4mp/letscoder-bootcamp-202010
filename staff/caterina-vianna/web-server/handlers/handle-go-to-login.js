const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
  fs.readFile("./public/login/index.html", "utf8", (error, content) => {
    if (error)
      return res.send(`sorry, there was an error :( ERROR: ${error.message}`);

    res.send(content);
  });
};
