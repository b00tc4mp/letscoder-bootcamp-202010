const createCustomError = require("./create-custom-error");

module.exports = {
  ContentError: createCustomError("ContentError"),
  LengthError: createCustomError("LengthError"),
  AuthError: createCustomError("AuthError"),
  ValueError: createCustomError("ValueError"),
  FormatError: createCustomError("FormatError"),
  ConflictError: createCustomError("ConflictError"),
  NotFoundError: createCustomError("NotFoundError"),
};
