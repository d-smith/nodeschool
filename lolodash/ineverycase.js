var _ = require("lodash");

var worker = function(cities) {
    _.forEach(cities, function(city) {
      if(city.population < 0.5) {
        city.size = 'small';
      } else if (city.population < 1.0) {
        city.size = 'med';
      } else {
        city.size = 'big';
      }
    })
    return cities;
};

module.exports = worker;
