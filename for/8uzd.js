"use strict"

function findWinner(n, times){
    let mintime = times[0];
    let avg_time = 0;
    for (let t of times){
        if (t<mintime){
            mintime = t;
        }
        avg_time+=t;
    }
    return [mintime, (avg_time/n-mintime)];
}

let [fastest_time, faster_by] = findWinner(4, [25, 20, 25, 22]);
console.log(`Fastest time was:${fastest_time}.\nThat's is faster than average by ${faster_by}s`);
