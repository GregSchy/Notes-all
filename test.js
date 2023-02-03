function sum(a) {
  return function (b) {
    return a + b;
  };
}

const add5 = sum(5);
console.log(add5(3));
