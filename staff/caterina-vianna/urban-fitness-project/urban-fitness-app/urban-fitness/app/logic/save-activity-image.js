import { call } from "../utils/call.js";
import {
  validateId,
  validateFile,
  validateCallback,
} from "./helpers/validations";
import context from "./context";

export default (function (activityId, image, callback) {
  validateId(activityId);
  validateFile(image);
  validateCallback(callback);

  var formData = new FormData();
  formData.append("image", image);

  call(
    "POST",
    `http://192.168.0.11:4000/api/activity/${activityId}/images`,
    {},
    formData,
    (status, response) => {
      if (status === 0) return callback(new Error("server error"));
      else if (status !== 204) {
        const { error } = JSON.parse(response);

        return callback(new Error(error));
      }

      callback(null);
    }
  );
}.bind(context));
