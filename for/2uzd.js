"use stict";

function calculateClapsAndSnaps(n) {
  let claps = 0;
  let snaps = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 5 == 0 && i % 2 != 0) {
      snaps += 1;
    }
    if (i % 10 == 0) {
      claps += 1;
    }
  }
  return [claps, snaps];
}

let [heClapped, heSnapped] = calculateClapsAndSnaps(426);
console.log(`Claps: ${heClapped} \nSnaps: ${heSnapped}`);
