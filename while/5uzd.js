"use strict";

const prompt=require("prompt-sync")();

function shippingStats() {
  let expensiveShippings = 0;
  let averagePrice = 0;
  let shippments = 0;
  let sum=Number(prompt("enter shipping price: "));

  do{
    if (sum > 100) {
      expensiveShippings++;
    }
    averagePrice += sum;
    shippments++;
    sum = Number(prompt("enter shipping price: "));
    } while (sum > 0);

  return [expensiveShippings, averagePrice/shippments, shippments]
}

const [expensive, avgprice, total] = shippingStats();
console.log(`There were ${expensive} shippings with price above 100Lt;
            Average shippent price was ${avgprice} Lt;
            ${total} parcels were delivered in total`);

