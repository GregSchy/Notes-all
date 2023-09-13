// Write a function solution that, given an array A of N integers
// (between -100 and 100), returns the sign (-1, 0, 1) of the
// product of all the numbers in the array multiplied together.
// Assume that N is between 1 and 1000.
// For example, given A = [1, -2, -3, 5], the function should return
// 1 (the multiplication equals 30).
// Given A = [1, 2, 3, -5] your function should return -1 (the
// multiplication equals -30)
// Given A = [1, 2, 0, -5] your function should return O (the
// multiplication equals 0).
// Copyright 2009-2023 by Codility Limited. All

// / 2. Design an algorithm of joining two sorted lists. The output list has to be sorted as well.
const list1 = [1, 2, 3, 4, 5, 6];
const list2 = [4, 5, 9, 10];

const sortedList = [...list1, ...list2];

const sortedListUp = sortedList.sort((a, b) => b - a);
const arr = sortedList.sort((a, b) => b - a);
const arrayMoveDuplicates = new Set(sortedListUp);

// let sort;

// for (i = 0; (i = sortedList.length); i++) {
//   console.log("s");
// }

// function removeDuplicates(arr) {
//   return arr.reduce((acc, currentValue) => {
//     if (acc.includes(currentValue)) {
//       return acc;
//     } else {
//       acc.push(currentValue);
//     }
//     return acc;
//   }, []);
// }

// console.log(removeDuplicates(arr));

// console.log(sortedListUp);
// console.log(arrayMoveDuplicates);
// console.log(sort);

const removeDuplicates = (arr) => {
  let initialArr = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      initialArr;
    } else {
      initialArr.push(arr[i]);
    }
  }
  return initialArr;
};

console.log(removeDuplicates(arr));
