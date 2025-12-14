"use strict";

const prompt = require("prompt-sync")();

function calculator() {
  let entries = [];
  const operation = prompt(`Please select what operation you'd like to do:
                        sum(1), difference (2), multiplication(3), max(4), min(5): `);

  let entry = Number(prompt(`Enter a numer: `));
  while (entry != 0) {
    entries.push(entry);
    entry = Number(prompt(`Enter a numer: `));
  }
  console.log(entries);
  
  let sum = entries[0];
  let difference = entries[0];
  let multiplication = entries[0];
  for (let e = 1; e < entries.length; e++) {
    sum += entries[e];
    multiplication = multiplication * entries[e];
    difference -= entries[e];
  }
  let result;
  if (operation == "1") {
    result = sum;
  }
  if (operation == "2") {
    result = difference;
  }
  if (operation == "3") {
    result = multiplication;
  }
  if (operation == "4") {
    result = Math.max(...entries);
  }
  if (operation == "5") {
    result = Math.min(...entries);
  }
  return result;
}


const rez = calculator();

console.log(rez);
