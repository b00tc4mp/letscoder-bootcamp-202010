const { validateCallback } = validations;

const acceptCookies = (callback) => {
  call(
    "POST",
    "http://localhost:3000/api/accept-cookies",
    {},
    "",
    (status, response) => {
      if (status !== 204) {
        const { error } = JSON.parse(response);

        return callback(new Error(error));
      }

      callback(null);
    }
  );
};
