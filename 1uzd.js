"use strict";

function getNumberOfShirts(a, b) {
  let sum = 0;
  for (let i = a; i < b + 1; i++) {
    if (i % 6 == 0) {
      sum += 1;
    }
  }
  return sum;
}

console.log(getNumberOfShirts(31, 62));
