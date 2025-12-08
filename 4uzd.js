"use strict";

function getAverageHeight(heights) {
  let average = 0;
  const n = Number(heights.length);
  for (let tree = 0; tree < n; tree++) {
    average += heights[tree];
  }
  average = average / n;
  return average;
}

let list_of_heigths = [167, 134, 145, 156, 155, 176];
console.log(`Average height is ${getAverageHeight(list_of_heigths)} cm`);
