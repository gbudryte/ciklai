"use strict";

function countEven(numbers) {
  let count = 0;
  for (let number of numbers) {
    if (number % 2 == 0) {
      count += 1;
    }
  }
  if (count == 0) {
    count = "no";
  }
  return count;
}

let listOfNumbers = [5, 3, 99, 55, 35, 47, 11, 63, 51, 91];
console.log(
  `There are ${countEven(listOfNumbers)} even numbers in the given list`
);
