import { call } from "../../utils";

const {env: {API_URL}} = process

export default function saveLive(
    token,
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


  call(
    "POST",
    `${API_URL}/lives`,
    { 'Content-type': 'application/json',  Authorization: `Bearer ${token}`  }, 
    JSON.stringify({
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