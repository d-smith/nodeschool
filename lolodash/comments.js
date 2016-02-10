var _ = require("lodash");

var worker = function(args) {
  var counted = [];
  var grouped =  _.groupBy(args, 'username');
  _.forEach(grouped, function(item, name) {
    console.log('name is ', name)
    console.log('item is ', item);
    counted.push({username:name, comment_count:_.size(item)})
  });

  return _.sortBy(counted, 'comment_count').reverse();
};

module.exports = worker;
