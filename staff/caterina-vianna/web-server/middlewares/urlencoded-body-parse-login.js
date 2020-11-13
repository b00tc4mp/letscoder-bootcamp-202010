module.exports = (req, res, next) => {
  debugger;
  req.setEncoding("utf8");

  let content = "";

  req.on("data", (chunk) => {
    //console.log(chunk)

    content += chunk;
  });

  req.on("end", () => {
    const parts = content.split("&");

    let [, email] = parts[0].split("=");
    let [, password] = parts[1].split("=");

    email = decodeURIComponent(email);

    password = decodeURIComponent(password);

    const body = { email, password };
    req.body = body;

    next();
  });
};
