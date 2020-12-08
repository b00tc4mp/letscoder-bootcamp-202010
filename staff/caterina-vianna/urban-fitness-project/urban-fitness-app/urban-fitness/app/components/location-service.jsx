import Geocoder from "react-native-geocoding";

const getLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (data) => resolve(data.coords),
      (err) => reject(err)
    );
  });
};

const geocodeLocationByName = (locationName) => {
  return new Promise((resolve, reject) => {
    Geocoder.from(locationName)
      .then((json) => {
        const addressComponent = json.results[0].address_components[0];
        resolve(addressComponent);
      })
      .catch((error) => reject(error));
  });
};

const geocodeLocationByCoords = (lat, long) => {
  return new Promise((resolve, reject) => {
    Geocoder.from(lat, long)
      .then((json) => {
        const addressComponent = json.results[0].address_components[0];
        resolve(addressComponent);
      })
      .catch((error) => reject(error));
  });
};

export { geocodeLocationByCoords, geocodeLocationByName, getLocation };
