import { call } from "../utils";

export default function saveActivity(
  token,
  activityId,
  title,
  description,
  price,
  checked,
  address,
  sport,
  repeat,
  spots,
  activityDate,
  callback
) {
  //TODO VALIDATIONS

  call(
    "POST",
    "http://192.168.0.11:4000/api/activity",
    {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
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
      activityDate,
    }),
    (status, response) => {
      debugger;
      if (status === 0) return callback(new Error("server error"));
      else if (status !== 200) {
        const { error } = JSON.parse(response);

        return callback(new Error(error));
      }

      callback(null);
    }
  );
}
