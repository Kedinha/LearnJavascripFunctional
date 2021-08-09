// Higher Order Function - é possivel passar uma função como
// parametro com uma outra função

function run(fn) {
  return `Result: ${fn()}`;
}

function sayHello() {
  console.log("Hello!!");
}

run(sayHello);

run(function () {
  console.log("run!!");
});

const result = run(Math.random);
console.log(result);
