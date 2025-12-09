"use strict";

function getStats(n, values) {
  let max_points = n * 6;
  let sum_of_points = 0;
  for (let i = 0; i < n; i++) {
    sum_of_points += values[i];
  }
  let avg_point = (sum_of_points / n).toFixed(1);
  let result = sum_of_points > max_points / 2 ? "winner" : "loser";
  return [max_points, sum_of_points, avg_point, result];
}

let game_results = [6,6,2,2,5,4,5];
let number_od_throws = 7;

let [maxpoints, gotpoints, avgpoints, conslusion] = getStats(
  number_od_throws,
  game_results
);
console.log(
  `Maximum possible result: ${maxpoints}\nReceived points:${gotpoints}\nwhich make up for avg of ${avgpoints}\nBoy is a ${conslusion}`
);
