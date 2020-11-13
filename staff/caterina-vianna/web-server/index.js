const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const path = require("path");

const handleGoToRegister = require("./handlers/handle-go-to-register");
const handleRegister = require("./handlers/handle-register");
const handleGoToLogin = require("./handlers/handle-go-to-login");
const handleLogin = require("./handlers/handle-login");
const handleGoToHome = require("./handlers/handle-go-to-home");

app.get("/register", handleGoToRegister);

app.post("/register", handleRegister);
app.get("/login", cookieParser, handleGoToLogin);
app.post("/login", handleGoToLogin);

app.post("/logout", handleLogout);

app.get("/*", handleNotFound);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
