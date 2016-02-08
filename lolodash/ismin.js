
var _ = require("lodash");

function tempOver19(temp) {
  return temp > 19;
}
var worker = function(cities) {
  var result = {
      hot: [],
      warm: []
  };

  _.forEach(cities, function(city, cityname){

      if(_.every(city, tempOver19)) {
        result.hot.push(cityname);
      } else if(_.some(city, tempOver19)) {
        result.warm.push(cityname);
      }

    });

    return result;
};

module.exports = worker;
