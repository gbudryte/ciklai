"use strict"

function getStats(m, km){
    let total=0;
    for (let jumps of km){
        total+=jumps;
    }
    let average = total/m;
return [total, average];
}

let [jumps, avg_jumps] = getStats(3, [20, 40, 30]);
console.log(`Total jumps: ${jumps} \nwith average of ${avg_jumps} per try`);
