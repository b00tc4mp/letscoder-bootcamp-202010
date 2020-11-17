const retrieveUser = require("../../logic/retrieve-user");

module.exports = (req, res, handleError, cookiesAccepted) => {
  const {
    session: { userId },
  } = req;

  if (userId)
    retrieveUser(userId, (error, user) => {
      if (error) return handleError(error);
      res.render(
        "home",
        { feedback: "perfect", cookiesAccepted },
        (_error, html) => {
          if (_error) return handleError(_error);

          res.send(html.replace("{fullname}", user.fullname));
        }
      );
    });
  else res.redirect("/login");
};
