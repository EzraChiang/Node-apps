const request = require('request');

var getWeather = (lat, lng, callback) => {

  request({
    url: `https://api.darksky.net/forecast/d28c85e2eea9c7bd59b431d2cc976677/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('unable to fetch weather.');
    }
  });
};

module.exports.getWeather = getWeather;
