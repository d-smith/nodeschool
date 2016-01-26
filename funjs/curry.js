function curryN(fn, n) {
  n = n || fn.length;
  return function curried(arg) {
    if (n <= 1) return fn(arg);
    return curryN(fn.bind(this, arg), n - 1);
  }
}

module.exports = curryN

function add3(a,b,c) {
  return a + b + c;
}

var c = curryN(add3)

console.log(c(1)(2)(3))
