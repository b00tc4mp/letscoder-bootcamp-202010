import { call } from "../utils";
import {
  validateId,
  /* validateFile, */
  validateCallback,
} from "./helpers/validations";
import context from "./context";

export default (function (activityId, imageUri, callback) {
  validateId(activityId);
  /* validateFile(imageUri); */
  validateCallback(callback);

  var formData = new FormData();
  /* formData.append("image", new File(imageUri.localUri)); */
  formData.append("image", {
    uri: imageUri.localUri,
    name: "image",
    type: "image/jpeg",
  });
  debugger;
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
