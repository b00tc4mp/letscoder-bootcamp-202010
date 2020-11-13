module.exports = (req, res, next) => {
  req.setEncoding("utf8");

  let content = "";

  req.on("data", (chunk) => {
    //console.log(chunk)

    content += chunk; // content = content + chunk
  });

  req.on("end", () => {
    const parts = content.split("&");

    let [, fullname] = parts[0].split("=");
    let [, email] = parts[1].split("=");
    let [, password] = parts[2].split("=");

    //fullname = fullname.replaceAll('+', ' ') // ERROR not supported in NodeJS yet (but in the browsers yes :( ))

    fullname = fullname.split("+").join(" ");

    email = decodeURIComponent(email);

    // TODO check whether user already exists and throw error in that case, otherwise continue with register

    password = decodeURIComponent(password);

    //console.log(fullname, email, password)
    const body = { fullname, email, password };
  });

  next();
};
