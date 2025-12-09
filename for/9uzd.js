"use strict"

function getShopingItems(n, prices, weights){
    let avg_price=0;
    let total_weight=0;
    
    for (let i=0; i<n; i++){
        avg_price+=prices[i];
        total_weight+=weights[i];
    }
    avg_price = (avg_price/(100*n).toFixed(2));
    let can_carry = total_weight<5000 ? "can carry" : "cannot carry";

    return [avg_price, can_carry];
}

let [price, carry] = getShopingItems(2, [105, 1655], [3000, 2550]);
console.log(`Average price of all items:${price} Lt\nPetriukas ${carry} all of the items`);
