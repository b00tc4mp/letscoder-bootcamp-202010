import { call } from "../utils";

export default function (
  activityId,
  title,
  description,
  price,
  checked,
  address,
  sport,
  repeat,
  spots,
  selectedItems,
  duration,
  callback
) {
  call(
    "POST",
    "http://192.168.0.11:4000/api/activity/edit",
    { "Content-type": "application/json" },
    JSON.stringify({
      activityId,
      title,
      description,
      price,
      checked,
      address,
      sport,
      repeat,
      spots,
      selectedItems,
      duration,
    }),
    (status, response) => {
      debugger;
      if (status === 0) return callback(new Error("server error"));
      else if (status !== 204) {
        const { error } = JSON.parse(response);

        return callback(new Error(error));
      }

      callback(null);
    }
  );
}
