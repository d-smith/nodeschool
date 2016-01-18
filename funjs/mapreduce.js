module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function(accumulator, cur, curIdx, arr) {
    accumulator.push(fn(cur, curIdx, arr));
    return accumulator;
  }, []);
}
