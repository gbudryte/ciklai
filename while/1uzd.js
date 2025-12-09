"use strict"

function countDays(x, v){
    let days = 0;
    let nuts=0;
    let daily_requirement = 3*(1+v);
    while ((x-nuts) >= daily_requirement){
        days+=1;
        nuts=days*daily_requirement;
    }
    return Math.floor(days);
}

function checkIfEnough(counted_days){
    let result = counted_days>=92? 'enough':'not enough';
    return result
}

let days = countDays(900, 2);
let is_enought = checkIfEnough(days)

console.log(`There are enough nuts for ${days} days \nThis is ${is_enought} for the whole winter`);
