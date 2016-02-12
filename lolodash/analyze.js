var _ = require("lodash");

var worker = function(workers) {
  workers = _.sortBy(workers, 'income');

  var avg = _.reduce(workers, function(sum, worker){
    return sum + worker.income;
  },0) / workers.length;

  var underperform = _.filter(workers, function(worker){
    return worker.income <= avg;
  });

  var overperform = _.filter(workers, function(worker){
    return worker.income > avg;
  });

  return {
    average: avg,
    underperform: underperform,
    overperform: overperform
  };
};

module.exports = worker;
