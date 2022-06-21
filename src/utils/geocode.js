const request = require("postman-request");

const geocode = (name, callback) => {
  const url =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/'+
    encodeURIComponent(name) +
    '.json?access_token=pk.eyJ1Ijoic3VkaGFuc2h1MiIsImEiOiJjbDNtMGNlNmIwMDA2M2lwYjl6aXU0bGY3In0.l2gDML0dUacAmu1udV3MEQ&limit=1';
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to geoCode", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find this location", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
