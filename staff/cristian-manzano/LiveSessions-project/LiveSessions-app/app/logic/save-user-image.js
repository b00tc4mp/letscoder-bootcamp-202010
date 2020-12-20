import { call } from "../../utils"
import {
  validateId,
  /* validateFile, */
  validateCallback,
} from "./helpers/validations";


export default (function (userId, imageUri, callback) {
  validateId(userId);
  /* validateFile(imageUri); */
  validateCallback(callback);

  var formData = new FormData();
  formData.append('image', {uri: imageUri.localUri, name: 'image', type: 'image/jpeg'})
  //formData.append("image", imageUri);

  call(
    "POST",
    `http://192.168.0.21:4000/api/users/${userId}/images`,
    {'Content-Type': 'image/jpeg',
    'Content-Type': 'multipart/form-data'},
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
});