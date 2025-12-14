"use strict"

const prompt=require("prompt-sync")();

function countCandy(n){
    let eaten_candy=0;
    let days_with_candies=0;
    while (eaten_candy<=n){
        let wanted_candy = Number(prompt('How many candies for today?'));
        if (wanted_candy > (n-eaten_candy)){
            break;
        }
        else{
            eaten_candy+= wanted_candy;
            days_with_candies+=1;
        }
    }

    let leftover_candy = n-eaten_candy;
    return [days_with_candies, leftover_candy];
}

let [days, candies_left] = countCandy(25);

console.log(`there was enough candy for ${days} days. Only ${candies_left} candies left`);

