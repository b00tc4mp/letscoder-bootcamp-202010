import { call } from "../utils";

export default function saveActivity(
  token,
  title,
  description,
  checked,
  address,
  sport,
  repeat,
  date,
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
      title,
      description,
      checked,
      address,
      sport,
      repeat,
      spots,
      date,
    }),
    (status, response) => {
      if (status === 0) return callback(new Error("server error"));
      else if (status !== 200) {
        const { error } = JSON.parse(response);

        return callback(new Error(error));
      }

      callback(null);
    }
  );
}
