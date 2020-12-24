import { call } from "../utils";
import { validateToken, validateCallback } from "./helpers/validations";

export default function retrieveActivity(token, callback) {
  validateToken(token);
  validateCallback(callback);

  call(
    "GET",
    "http://192.168.0.11:4000/api/activity",
    { Authorization: `Bearer ${token}` },
    "",
    (status, response) => {
      if (status === 0) return callback(new Error("server error"));
      else if (status !== 200) {
        const { error } = JSON.parse(response);

        return callback(new Error(error));
      }

      const activities = JSON.parse(response);

      callback(null, activities);
    }
  );
}
