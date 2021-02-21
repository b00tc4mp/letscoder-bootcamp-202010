import { call } from "../../utils";
import {
  validateEmail,
  validatePassword,
  validateCallback,
} from "./helpers/validations";

const {env: {API_URL}} = process

export default function (email, password, callback) {
  debugger;
  validateEmail(email);
  validatePassword(password);
  validateCallback(callback);

  call(
    "POST",
    `${API_URL}/users/auth`,
    { "Content-type": "application/json" },
    JSON.stringify({ email, password }),
    (status, response) => {
      debugger;
      if (status === 0) return callback(new Error("server error"));
      else if (status !== 200) {
        const { error } = JSON.parse(response);

        return callback(new Error(error));
      }

      const { token } = JSON.parse(response);

      callback(null, token);
    }
  );
}