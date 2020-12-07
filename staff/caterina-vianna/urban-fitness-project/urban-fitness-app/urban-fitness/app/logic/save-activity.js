export default function saveActivity(
  token,
  title,
  description,
  materialRequired,
  coordinates,
  coverImage,
  spots,
  callback
) {
  //TODO VALIDATIONS

  call(
    "POST",
    "http://localhost:4000/api/activity",
    {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    JSON.stringify({
      title,
      description,
      materialRequired,
      coordinates,
      coverImage,
      spots,
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
