import { call } from "../utils";
import {
  validateFirstName,
  validateLastName,
  validateEmail,
  validatePassword,
  validateCallback,
} from "./helpers/validations";

export default function (firstName, lastName, email, password, callback) {
  debugger;
  validateFirstName(firstName);
  validateLastName(lastName);
  validateEmail(email);
  validatePassword(password);
  validateCallback(callback);

  call(
    "POST",
    "http://192.168.0.11:4000/api/users",
    { "Content-type": "application/json" },
    JSON.stringify({ firstName, lastName, email, password }),
    (status, response) => {
      if (status === 0) return callback(new Error("server error"));
      else if (status !== 201) {
        const { error } = JSON.parse(response);

        return callback(new Error(error));
      }

      callback(null);
    }
  );
}
