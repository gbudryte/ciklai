"use strict";

function calculateSnowflakes(n, k) {
  let s = k;
  let ratio = 1;
  for (let t = 1; t < n; t += 1) {
    ratio = ratio * 2;
    s += ratio * k;
  }
  return s;
}

console.log(`${calculateSnowflakes(4, 2)} snowflakes in total`);
