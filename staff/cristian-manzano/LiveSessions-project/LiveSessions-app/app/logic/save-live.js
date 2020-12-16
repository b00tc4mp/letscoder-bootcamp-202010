import { call } from "../../utils";

export default function saveLive(
    promoterId,
    artistId,
    liveId,
    title, 
    liveDate, 
    status, 
    duration, 
    payment, 
    description,
    callback
) {
  //TODO VALIDATIONS

  call(
    "POST",
    "http://192.168.1.131:4000/api/lives",
    {
      "Content-type": "application/json",
    },
    JSON.stringify({
        promoterId,
        artistId,
        liveId,
        title, 
        liveDate, 
        status, 
        duration, 
        payment, 
        description,
    }),
    (status, response) => {
      debugger;
      if (status === 0) return callback(new Error("server error"));
      else if (status !== 200) {
        const { error } = JSON.parse(response);

        return callback(new Error(error));
      }
      const { _id } = JSON.parse(response);
      callback(null, _id);
    }
  );
}