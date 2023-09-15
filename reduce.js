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
// const list1 = [1, 2, 3, 4, 5, 6];
// const list2 = [4, 5, 9, 10];

// const sortedList = [...list1, ...list2];

// const sortedListUp = sortedList.sort((a, b) => b - a);
// const arr = sortedList.sort((a, b) => b - a);
// const arrayMoveDuplicates = new Set(sortedListUp);

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

// const removeDuplicates = (arr) => {
//   let initialArr = [];
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i - 1]) {
//       initialArr;
//     } else {
//       initialArr.push(arr[i]);
//     }
//   }
//   return initialArr;
// };

// console.log(removeDuplicates(arr));

// ===============================================================================================
//===================================================================================================
// function total(arr) {
//   let sum = 0;
//   for (i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// const reduceSum = (arr) => {
//   const sum = arr.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     0
//   );
//   return sum;
// };

// console.log(total([1, 2, 3]));
// console.log(reduceSum([1, 2, 3]));

// ===============================================================================================
//===================================================================================================
//2) Turn an array of numbers into a long string of all those numbers.

// function stringConcat(arr) {
//   const concat = arr.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     ""
//   );
//   return concat;
// }

// function stringConcat(arr) {
//   // Use reduce to concatenate numbers into a string
//   const result = arr.reduce(
//     (accumulator, currentValue) => accumulator + currentValue.toString(),
//     ""
//   );

//   return result;
// }

// const stringConcatLoop = (arr) => {
//   let result = "";
//   for (let i = 0; i < arr.length; i++) {
//     result += arr[i];
//   }
//   return result;
// };

// console.log(stringConcat([1, 2, 3])); // "123"
// console.log(stringConcatLoop([1, 2, 3])); // "123"

// ===============================================================================================
//===================================================================================================

//) Turn an array of voter objects into a count of how many people voted

function totalVotes(arr) {
    const count = arr.reduce((accumulator, currentValue) => {
      if (currentValue.voted) {
        return accumulator + 1;
      }
      return accumulator;
    }, 0);
    return count;
  }
  
  var voters = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false },
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 30, voted: true },
    { name: "Zack", age: 19, voted: false },
  ];
  console.log(totalVotes(voters)); // 7
  
  /////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////
  
  //////4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
  
  function shoppingSpree(arr) {
    const all = wishlist.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      0
    );
    return all;
  }
  
  var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 },
  ];
  
  console.log(shoppingSpree(wishlist)); // 227005
  
  //////////////////////////////////////////////
  
  function shoppingSpree(arr) {
    let totalCost = 0;
  
    for (const item of arr) {
      totalCost += item.price;
    }
  
    return totalCost;
  }
  
  var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidget spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 },
  ];
  
  console.log(shoppingSpree(wishlist)); // Output: 227005
  
  //////////////////////////////
  /////////////////////////////
  // 5) Given an array of arrays, flatten them into a single array
  
  function flatten(arr) {
    return [].concat.apply([], arr);
  }
  
  function flattenSpread(arr) {
    return [].concat(...arr);
  }
  
  var arrays = [["1", "2", "3"], [true], [4, 5, 6]];
  
  console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
  console.log(flattenSpread(arrays)); // ["1", "2", "3", true, 4, 5, 6];
  
  
  //////////////////////
  ////////////////////////
  //6) Given an array of potential voters, return an object representing the results of the vote
  
  var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
  ];
  
  function voterResults(arr) {
   const resultVotes = voters.reduce((accumulator, currentValue)=> )
  }
  
  console.log(voterResults(voters)); // Returned value shown below:
  /*
  { numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
  }
  */