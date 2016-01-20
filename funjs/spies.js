function Spy(target, method) {
  originalFn = target[method];

  var result = {
    count : 0
  }

  target[method] = function() {
    result.count++;
    return originalFn.apply(this, arguments);
  }

  return result;
}

module.exports = Spy
