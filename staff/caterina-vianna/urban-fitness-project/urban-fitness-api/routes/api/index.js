debugger;
const { Router } = require("express");
const { jsonBodyParser } = require("../../middlewares");

const {
  handleRegisterUser,
  handleAuthenticateUser,
  handleRetrieveUser,
} = require("./handlers");
const handleSaveActivity = require("./handlers/handle-save-activity");

const withErrorHandling = require("./helpers/with-error-handling");

const router = new Router();

// router.use(jsonBodyParser)

router.post(
  "/api/users",
  jsonBodyParser,
  withErrorHandling(handleRegisterUser)
);
/* 
// .post /api/activites/all
 */
router.post(
  "/api/users/auth",
  jsonBodyParser,
  withErrorHandling(handleAuthenticateUser)
);

router.post(
  "/api/activity",
  jsonBodyParser,
  withErrorHandling(handleSaveActivity)
);

router.get("/api/users", withErrorHandling(handleRetrieveUser));

module.exports = router;
