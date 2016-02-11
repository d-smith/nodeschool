var _ = require("lodash");

var worker = function(orders) {
  var overview = [];
  var total = 0;

  orders = _.groupBy(orders, 'article');


  _.forEach(orders, function(item, key){

    key = parseInt(key);
    total = 0;

    if(item.length === 1) {
      total = item[0].quantity;
    } else {
      total = _.reduce(item, function(sum, item){
        return sum + item.quantity;
      },0);
    }
    overview.push({article:key,total_orders:total})
  });

  overview = _.sortBy(overview,"total_orders").reverse();

  return overview;

};

module.exports = worker;
