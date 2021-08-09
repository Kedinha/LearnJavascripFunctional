// Diz-se que uma linguagem de programação possui
// funções de primeira classe quando funções nessa
// linguagem são tratadas como qualquer outra variável.

const add = function (a, b) {
  return a + b;
};

// Arrow function
const addiction = (a, b) => a + b;

console.log(add(2, 5));
console.log(addiction(2, 5));
