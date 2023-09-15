// const numbers = [1, 2, 3, 4, 5, 6];

// const sumEvenNumbers = (arr) => {
//   const resultReduce = arr.reduce((accumulator, currentValue) => {
//     if (currentValue % 2 === 0) {
//       return accumulator + currentValue;
//     } else {
//       return accumulator;
//     }
//   }, 0);
//   return resultReduce;
// };

// const result = sumEvenNumbers(numbers);
// console.log(result); // Should output 12 (2 + 4 + 6 = 12)

const numbers = [12, 5, 32, 8, 17, 25];

const findMaxNumber = (arr) => {
  const resultReduce = arr.reduce((accumulator, currentNumber) => {
    if (currentNumber > accumulator) {
      return currentNumber;
    } else {
      return accumulator;
    }
  }, numbers[0]);
  return resultReduce;
};

const result = findMaxNumber(numbers);
console.log(result); // Should output 32 (the maximum value in the array)
