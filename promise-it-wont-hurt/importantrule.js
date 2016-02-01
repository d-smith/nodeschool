
function throwMyGod() {
  throw new Error("OH NOES");
}

function iterate(i) {
  console.log(i);
  return i + 1;
}

Promise.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(throwMyGod)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(null, console.log);
