import { call } from "../utils";
import { validateCallback, validateToken } from "./helpers/validations";

export default (function (token, querySports, callback) {
  validateToken(token);
  validateCallback(callback);

  const queryParams = {};

  if (querySports) queryParams.querySports = querySports;

  const queryString = Object.keys(queryParams)
    .map((key) => `${key}=${queryParams[key]}`)
    .join("&");

  call(
    "GET",
    `http:///192.168.0.11:4000/api/activity/search/?${queryString}`,
    { Authorization: `Bearer ${token}` },
    "",
    (status, response) => {
      debugger;
      if (status === 0) return callback(new Error("server error"));
      else if (status !== 200) {
        const { error } = JSON.parse(response);

        return callback(new Error(error));
      }

      const activities = JSON.parse(response);

      callback(null, activities);
    }
  );
});
