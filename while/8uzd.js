"use strict";
const prompt = require("prompt-sync")();

function cards(friends, cards) {
  let type = 0;
  let correctType = 0;
  while (type < cards) {
    let numberOfType = Number(prompt(`How many cards of type ${type + 1}?`));
    if (numberOfType >= friends) {
      correctType++;
    }
    type++;
  }
  return correctType;
}

const numberOfFriends = Number(prompt(`How many friends Linas has?`));
const typesOfCards = Number(prompt("How many types of cards there is?"));
const availableTypes = cards(numberOfFriends, typesOfCards);

console.log(`There are ${availableTypes} type(s) of cards that would be enough for all friends`);
